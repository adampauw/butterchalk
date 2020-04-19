import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import styled from "@emotion/styled";
import Overlay from "./components/header/Overlay";

const App: React.FC = () => {
  const Background = styled.div`
    background-image: url("/img/mountain-fog.jpg");
    background-size: cover;
    background-position: center;
    height: 500px;
    position: relative;
  `;

  return (
    <div className="App">
      <Background>
        <Navbar />
        <Overlay width={100} height={500} position={0} />
        <Overlay width={20} height={500} position={120} />
      </Background>
      <div
        className="Content"
        style={{ backgroundColor: "#97aeb3", height: "100vh" }}>
      </div>
    </div>
  );
};

export default App;
