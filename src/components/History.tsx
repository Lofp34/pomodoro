import React from 'react';
import styled from 'styled-components';
import type { Session } from './Timer';

const HistoryContainer = styled.div`
  width: 100%;
  max-width: 600px;
  color: #fff;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const SessionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SessionItem = styled.li`
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskName = styled.span`
  font-weight: 600;
`;

const SessionDate = styled.span`
  font-size: 0.9rem;
  color: #888;
`;

interface HistoryProps {
  sessions: Session[];
}

const History: React.FC<HistoryProps> = ({ sessions }) => {
  return (
    <HistoryContainer>
      <Title>Session History</Title>
      <SessionList>
        {sessions.length > 0 ? (
          sessions.slice().reverse().map((session, index) => (
            <SessionItem key={index}>
              <TaskName>{session.task}</TaskName>
              <SessionDate>
                {new Date(session.date).toLocaleDateString()} - {session.duration} min
              </SessionDate>
            </SessionItem>
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>No sessions recorded yet.</p>
        )}
      </SessionList>
    </HistoryContainer>
  );
};

export default History; 