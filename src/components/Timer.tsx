import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TimerLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimerWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-bottom: 2rem;
`;

const TimerDisplay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  font-weight: 600;
  color: #fff;
  z-index: 1;
`;

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg); /* Start the circle from the top */
`;

const CircleBackground = styled.circle`
  fill: none;
  stroke: #333;
`;

const CircleProgress = styled.circle<{progressColor: string}>`
  fill: none;
  stroke: ${({ progressColor }) => progressColor};
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s linear, stroke 0.5s ease;
`;

const Controls = styled.div`
  button {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    padding: 0.8rem 2rem;
    margin: 0 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #fff;
      color: #1a1a1a;
    }
  }
`;

const ModeButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;

  button {
    background-color: transparent;
    border: 1px solid #555;
    color: #888;
    padding: 0.5rem 1rem;
    margin: 0.25rem 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.2s ease-in-out;

    &.active {
      border-color: #fff;
      color: #fff;
    }
  }
`;

const TaskForm = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  input {
    background-color: #2a2a2a;
    border: 1px solid #444;
    border-radius: 5px;
    color: #fff;
    padding: 0.8rem;
    margin-bottom: 1rem;
    width: 300px;
    text-align: center;
    font-size: 1rem;

    &::placeholder {
      color: #888;
    }
  }
`;

const POMODORO_SETTINGS = {
  work: { duration: 25, color: '#4a90e2' },
  shortBreak: { duration: 5, color: '#50e3c2' },
  longBreak: { duration: 15, color: '#bd10e0' },
};

type Mode = 'work' | 'shortBreak' | 'longBreak';

export interface Session {
  task: string;
  date: string;
  duration: number; // in minutes
}

const Timer: React.FC = () => {
  const [_sessions, setSessions] = useLocalStorage<Session[]>('sessions', []);
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
          // Save the session
          if (task.trim()) { // Only save if there's a task name
            setSessions(prevSessions => [
              ...prevSessions,
              {
                task,
                date: new Date().toISOString(),
                duration: POMODORO_SETTINGS.work.duration,
              },
            ]);
          }
          setTask(''); // Reset task input

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

  const totalSeconds = POMODORO_SETTINGS[mode].duration * 60;
  const remainingSeconds = minutes * 60 + seconds;
  const circumference = 2 * Math.PI * 140;
  const strokeDashoffset = circumference - (remainingSeconds / totalSeconds) * circumference;
  const progressColor = POMODORO_SETTINGS[mode].color;

  return (
    <TimerLayout>
      <ModeButtons>
        <button className={mode === 'work' ? 'active' : ''} onClick={() => switchMode('work')}>Pomodoro</button>
        <button className={mode === 'shortBreak' ? 'active' : ''} onClick={() => switchMode('shortBreak')}>Short Break</button>
        <button className={mode === 'longBreak' ? 'active' : ''} onClick={() => switchMode('longBreak')}>Long Break</button>
      </ModeButtons>

      {mode === 'work' && (
        <TaskForm>
          <input 
            type="text" 
            placeholder="What are you working on?" 
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </TaskForm>
      )}

      <TimerWrapper>
        <Svg viewBox="0 0 300 300">
          <CircleBackground cx="150" cy="150" r="140" strokeWidth="15" />
          <CircleProgress
            cx="150"
            cy="150"
            r="140"
            strokeWidth="15"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            progressColor={progressColor}
          />
        </Svg>
        <TimerDisplay>
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </TimerDisplay>
      </TimerWrapper>
      <Controls>
        <button onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={reset}>Reset</button>
      </Controls>
    </TimerLayout>
  );
};

export default Timer; 