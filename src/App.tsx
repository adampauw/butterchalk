import React from "react";
import styled from "@emotion/styled";

import { Navbar } from "./components/navbar/Navbar";
import NavbarMobile from "./components/navbar/NavbarMobile";
import Overlay from "./components/header/Overlay";
import { Blog } from "./components/blog/Blog";
import FancyButton from "./components/header/FancyButton";
import "./App.scss";
import { isMobile } from "./components/helper/deviceDetect";
import { Info } from "./components/info/Info";
import { SvgIcon } from "./components/helper/SVGicon";


const App: React.FC = () => {
  const Background = styled.div`
    background-image: url("/img/mountain-fog.jpg");
    background-size: cover;
    background-position: center;
    height: 600px;
    position: relative;
    @media (max-width: 425px) {
      height: 400px;
      background-position: right;
    }
  `;

  return (
    <div className="App">
      <Background>
        {isMobile() ?
          <>
            <NavbarMobile />
            <SvgIcon src='/img/mobilechalk.svg' cssClass="logo-text" color="black" />
          </>
          :
          <>
            <Navbar />
            <SvgIcon src='/img/deskchalk.svg' cssClass="logo-text" color="black" />
          </>
        }
        <Overlay width={100} height={600} position={0} />
        <Overlay width={20} height={600} position={120} />
      </Background>
      <div className="Content">
        <Info />
        <FancyButton />
        <Blog />
      </div>
    </div>
  );
};

export default App;
