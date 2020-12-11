/* @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { css, jsx } from '@emotion/core';

import { isMobile } from "../helper/deviceDetect";
import { Navbar } from "../navbar/Navbar";
import NavbarMobile from "../../components/navbar/NavbarMobile";
import { SvgIcon } from "../helper/SVGicon";
import Overlay from "./Overlay";

export const Background = () => {
  const Background = styled.div`
    background-image: url("https://res.cloudinary.com/butterchalk/image/upload/v1593255744/mountain-fog_simple.png");
    background-size: cover;
    background-position: center;
    height: 600px;
  	width: 100vw;
    position: relative;
    @media (max-width: 425px) {
      height: 400px;
      background-position: right;
    }
  `;

  const BackgroundWrapper = styled.div`
  	width: 100vw;
		height: 100%;
		position: relative;
		overflow: hidden;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: 2px;
  `;

  const objects = css `
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-shadow: 0 0 5px #000;
  `

  return (

    <BackgroundWrapper>
      <Background>
      {isMobile() ?
        <React.Fragment>
          <NavbarMobile />
          <SvgIcon src='/img/mobilechalk.svg' cssClass="logo-text" color="black"/>
        </React.Fragment>
        :
        <React.Fragment>
          <Navbar />
          <SvgIcon src='/img/deskchalk.svg' cssClass="logo-text" color="black" css={css`${objects}`}/>
        </React.Fragment>
      }
      <Overlay width={100} height={600} position={0} />
      <Overlay width={20} height={600} position={120} />
      </Background>
    </BackgroundWrapper>
  )
};

export default Background;