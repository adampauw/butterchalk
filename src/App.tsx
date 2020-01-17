import React from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import styled from '@emotion/styled';

const App: React.FC = () => {
  const Background = styled.div`
    background-image: url("/img/mountain.jpg");
    background-size: cover;
    height: 100vh;
  `
  return (
    <Background>
      <div className="App" >
        <Navbar />
        <div className="Content"></div>
      </div>
    </Background>
  );
}

export default App;
