import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dbxtsibjzfuigodeeovy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRieHRzaWJqemZ1aWdvZGVlb3Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MTkzODQsImV4cCI6MjA2NTk5NTM4NH0.kPV9tIC7SMPwboV_eIuSZztYIJRlysmgKOOqgX93wUw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 