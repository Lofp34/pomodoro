import { useState, useEffect, useCallback } from 'react';
import Timer from './components/Timer';
import History from './components/History';
import styled from 'styled-components';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { Session } from './components/Timer';

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

export const POMODORO_SETTINGS = {
  work: { duration: 25, color: '#4a90e2' },
  shortBreak: { duration: 5, color: '#50e3c2' },
  longBreak: { duration: 15, color: '#bd10e0' },
};

export type Mode = 'work' | 'shortBreak' | 'longBreak';

function App() {
  const [page, setPage] = useState<'timer' | 'history'>('timer');
  const [sessions, setSessions] = useLocalStorage<Session[]>('sessions', []);
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
    let interval: number | undefined;

    if (isActive) {
      interval = setInterval(() => {
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
          if (task.trim()) {
            setSessions(prevSessions => [
              ...prevSessions,
              {
                task,
                date: new Date().toISOString(),
                duration: POMODORO_SETTINGS.work.duration,
              },
            ]);
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

    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, mode, pomodoroCount, switchMode, task, setSessions]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    switchMode(mode);
  };

  return (
    <AppContainer>
      <Nav>
        <button onClick={() => setPage('timer')} title="Timer">⏲️</button>
        <button onClick={() => setPage('history')} title="History">📋</button>
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
    </AppContainer>
  )
}

export default App;
