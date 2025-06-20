import { useState, useEffect, useCallback } from 'react';
import Timer from './components/Timer';
import History from './components/History';
import Auth from './components/Auth';
import { supabase } from './supabaseClient';
import styled from 'styled-components';
import type { Session as SupabaseSession } from '@supabase/supabase-js';
import type { Session } from './components/Timer';
import { POMODORO_SETTINGS } from './config';
import type { Mode } from './config';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Nav = styled.nav`
  position: absolute;
  top: 2rem;
  right: 2rem;
  
  button {
    background: none;
    border: none;
    color: #888;
    font-size: 1.5rem;
    cursor: pointer;
    margin: 0 0.5rem;
    transition: color 0.2s ease;
    
    &:hover {
      color: #fff;
    }
  }
`;

function App() {
  const [session, setSession] = useState<SupabaseSession | null>(null);
  const [page, setPage] = useState<'timer' | 'history'>('timer');
  const [sessions, setSessions] = useState<Session[]>([]);
  const [mode, setMode] = useState<Mode>('work');
  const [task, setTask] = useState('');
  const [minutes, setMinutes] = useState(POMODORO_SETTINGS.work.duration);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0);

  const switchMode = useCallback((newMode: Mode) => {
    setMode(newMode);
    setIsActive(false);
    setMinutes(POMODORO_SETTINGS[newMode].duration);
    setSeconds(0);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    const fetchSessions = async () => {
      if (session?.user) {
        const { data, error } = await supabase
          .from('sessions')
          .select('*')
          .eq('user_id', session.user.id)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching sessions:', error);
        } else {
          setSessions(data as Session[]);
        }
      }
    };

    fetchSessions();
  }, [session]);

  useEffect(() => {
    let interval: number | undefined;

    if (isActive) {
      interval = window.setInterval(async () => {
        if (seconds > 0) {
          setSeconds(s => s - 1);
          return;
        }

        if (minutes > 0) {
          setMinutes(m => m - 1);
          setSeconds(59);
          return;
        }

        // Timer finished
        if (mode === 'work') {
          if (task.trim() && session?.user) {
            const newSession = {
              task,
              duration: POMODORO_SETTINGS.work.duration,
              user_id: session.user.id,
            };
            
            const { error } = await supabase.from('sessions').insert([newSession]);

            if (error) {
              console.error('Error saving session:', error);
            } else {
              // We could refetch, but it's better to just add to the local state
              // for immediate feedback. Realtime will handle sync.
              // setSessions(prev => [newSession, ...prev]); 
              // For now, we'll let the fetch on session change handle it.
            }
          }
          setTask('');

          const newCount = pomodoroCount + 1;
          setPomodoroCount(newCount);
          switchMode(newCount % 4 === 0 ? 'longBreak' : 'shortBreak');
        } else {
          switchMode('work');
        }
      }, 1000);
    }

    return () => window.clearInterval(interval);
  }, [isActive, seconds, minutes, mode, pomodoroCount, switchMode, task, session]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    switchMode(mode);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  }

  return (
    <AppContainer>
      {!session ? (
        <Auth />
      ) : (
        <>
          <Nav>
            <button onClick={() => setPage('timer')} title="Timer">⏲️</button>
            <button onClick={() => setPage('history')} title="History">📋</button>
            <button onClick={handleLogout} title="Logout">🚪</button>
          </Nav>
          {page === 'timer' ? (
            <Timer 
              mode={mode}
              minutes={minutes}
              seconds={seconds}
              isActive={isActive}
              task={task}
              setTask={setTask}
              switchMode={switchMode}
              toggle={toggle}
              reset={reset}
            />
          ) : (
            <History sessions={sessions} />
          )}
        </>
      )}
    </AppContainer>
  )
}

export default App;
