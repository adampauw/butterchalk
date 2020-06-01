import React, { FC } from 'react'
import styled from '@emotion/styled';
import { SvgIcon } from '../helper/SVGicon';
import { isMobile } from '../helper/deviceDetect';


export const Info: FC = (props: any) => {

  const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 620px;
    padding-bottom: 10%;
    position: relative;
    margin-top: 15%;
    @media (max-width: 425px) {
      height: 250px;
      padding-bottom: 100%;
    }
    @media (min-width: 2560px) {
      padding-bottom: 20%;
    }
  `
  const UpperInfo = styled.div`
    display: flex;
    flex-direction: row;
    height: 60%;
    width: 100%;
    margin-bottom: 10%;
    @media (max-width: 425px) {
      height: unset;
    }
  `
  const TextWrapper = styled.div`
    width: 100%;
    align-self: center;
    justify-content: center;
    padding: 0 10%;
    font-size: 18px;
    font-family: noteworthy;
    letter-spacing: 3px;
    text-align: left;
    @media (min-width: 2560px) {
      font-size: 25px;
    }
  `
  const Text = styled.span`
    margin: 10px 0;
    display: inline-block;
  `


  return (
    <InfoContainer>
      <UpperInfo>
        <TextWrapper>
          <Text>Butterchalk offers a lighter take on the climbing scene, a place for the average climber to find slightly above average advice
          </Text>
          <Text>I’m not a pro, nor an old mountain man that could tie a prusik knot with a spare tendon he dug out of his leg. Im passionate climber whos had his pitfalls and revelations and wants to share them with you. Maybe it streamlines your success or just fills your day with comedic gold. Either way, lets get mossy
          </Text>
        </TextWrapper>
        {!isMobile() && <SvgIcon src='/img/butterchalk_logo.svg' cssClass="logo-churn" color="black" />}
      </UpperInfo>
      <SvgIcon src='/img/dolomites.svg' cssClass="dolomites" color="black" />
    </InfoContainer>
  )
};