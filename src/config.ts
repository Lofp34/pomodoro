export const POMODORO_SETTINGS = {
  work: { duration: 25, color: '#4a90e2' },
  shortBreak: { duration: 5, color: '#50e3c2' },
  longBreak: { duration: 15, color: '#bd10e0' },
};

export type Mode = 'work' | 'shortBreak' | 'longBreak';

export interface Session {
  id?: number;
  created_at: string;
  task: string;
  duration: number;
  user_id?: string;
} 