import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import styled from 'styled-components';

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #1a1a1a;
  border-radius: 8px;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  color: #888;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 300px;
`;

const Input = styled.input`
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
`;

const Button = styled.button`
  background-color: #4a90e2;
  border: none;
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  width: 300px;

  &:hover {
    background-color: #357ABD;
  }

  &:disabled {
    background-color: #333;
    cursor: not-allowed;
  }
`;

const Auth: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContainer>
      <Title>🍅 Pomodoro App</Title>
      <Description>Sign in via magic link with your email below</Description>
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button disabled={loading}>
          <span>{loading ? 'Sending...' : 'Send magic link'}</span>
        </Button>
      </form>
    </AuthContainer>
  );
};

export default Auth; 