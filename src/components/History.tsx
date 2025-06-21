import React from 'react';
import styled from 'styled-components';
import type { Session } from '../config';

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

const SessionContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TaskName = styled.span`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const SessionDate = styled.span`
  font-size: 0.9rem;
  color: #888;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #888;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  &:hover {
    color: #ff4757;
    background-color: rgba(255, 71, 87, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

interface HistoryProps {
  sessions: Session[];
  onDeleteSession: (sessionId: number) => void;
}

const History: React.FC<HistoryProps> = ({ sessions, onDeleteSession }) => {
  const handleDelete = (sessionId: number | undefined) => {
    if (sessionId !== undefined && window.confirm('Êtes-vous sûr de vouloir supprimer cette session ?')) {
      onDeleteSession(sessionId);
    }
  };

  return (
    <HistoryContainer>
      <Title>Session History</Title>
      <SessionList>
        {sessions.length > 0 ? (
          sessions.map((session, index) => (
            <SessionItem key={session.id || index}>
              <SessionContent>
                <TaskName>{session.task}</TaskName>
                <SessionDate>
                  {new Date(session.created_at).toLocaleDateString()} - {session.duration} min
                </SessionDate>
              </SessionContent>
              <DeleteButton
                onClick={() => handleDelete(session.id)}
                title="Supprimer cette session"
                aria-label="Supprimer cette session"
              >
                ✕
              </DeleteButton>
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