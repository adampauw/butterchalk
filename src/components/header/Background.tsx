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
    background-image: url("https://res.cloudinary.com/butterchalk/image/upload/v1593255744/mountain-fog_Background.png");
    background-size: cover;
    background-position: center;
    height: 600px;
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
  `;

  const BackgroundImage = styled.div`
  	position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100%;
  `;


  const Midground = css`
  background: url("https://res.cloudinary.com/butterchalk/image/upload/v1593255744/mountain-fog_Midground.png");
  background-size: cover;
  background-position: center;
  transform: scale3d(1.1, 1.1, 1.1);
  opacity: 0.2;
  animation: scaler 1s ease-out;
  animation-fill-mode: forwards;
  `

  const Foreground = css`
    ${Midground};
		background: url("https://res.cloudinary.com/butterchalk/image/upload/v1593255744/mountain-fog_Foreground.png");
		transform: scale3d(1.3, 1.3, 1.3);
		opacity: 0.1;
		animation: scaler 1.2s ease-out;
		animation-fill-mode: forwards;
  `

  return (

    <Background>
      <BackgroundWrapper>
        <BackgroundImage css={css` ${Midground} `} />
        <BackgroundImage css={css ` ${Foreground} `} />
      </BackgroundWrapper>
      {isMobile() ?
        <React.Fragment>
          <NavbarMobile />
          <SvgIcon src='/img/mobilechalk.svg' cssClass="logo-text" color="black" />
        </React.Fragment>
        :
        <React.Fragment>
          <Navbar />
          <SvgIcon src='/img/deskchalk.svg' cssClass="logo-text" color="black" />
        </React.Fragment>
      }
      <Overlay width={100} height={600} position={0} />
      <Overlay width={20} height={600} position={120} />
    </Background>
  )
};

export default Background;