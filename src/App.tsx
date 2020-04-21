import React from "react";

import { Navbar } from "./components/navbar/Navbar";
import Overlay from "./components/header/Overlay";

import styled from "@emotion/styled";
import "./App.scss";
import { Blog } from "./components/blog/Blog";

const App: React.FC = () => {
  const Background = styled.div`
    background-image: url("/img/mountain-fog.jpg");
    background-size: cover;
    background-position: center;
    height: 600px;
    position: relative;
  `;

  return (
    <div className="App">
      <Background>
        <Navbar />
        <Overlay width={100} height={600} position={0} />
        <Overlay width={20} height={600} position={120} />
      </Background>
      <div className="Content" style={{ backgroundColor: "#d8e7ea", height: "100vh" }}>
        <Blog/>
      </div>
    </div>
  );
};

export default App;
