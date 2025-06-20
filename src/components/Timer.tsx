import React from 'react';
import styled from 'styled-components';
import { POMODORO_SETTINGS } from '../config';
import type { Mode } from '../config';

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

export interface Session {
  task: string;
  date: string;
  duration: number; // in minutes
}

interface TimerProps {
  mode: Mode;
  minutes: number;
  seconds: number;
  isActive: boolean;
  task: string;
  setTask: (task: string) => void;
  switchMode: (mode: Mode) => void;
  toggle: () => void;
  reset: () => void;
}

const Timer: React.FC<TimerProps> = ({
  mode,
  minutes,
  seconds,
  isActive,
  task,
  setTask,
  switchMode,
  toggle,
  reset,
}) => {
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