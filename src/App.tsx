import { useState } from 'react';
import Timer from './components/Timer';
import History from './components/History';
import styled from 'styled-components';

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
  const [page, setPage] = useState<'timer' | 'history'>('timer');

  return (
    <AppContainer>
      <Nav>
        <button onClick={() => setPage('timer')} title="Timer">⏲️</button>
        <button onClick={() => setPage('history')} title="History">📋</button>
      </Nav>
      {page === 'timer' ? <Timer /> : <History />}
    </AppContainer>
  )
}

export default App
