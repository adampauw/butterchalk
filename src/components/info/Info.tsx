import React, { FC } from 'react'
import styled from '@emotion/styled';
import { SvgIcon } from '../helper/SVGicon';


export const Info: FC = (props: any) => {

  const InfoContainer = styled.div`
    display: flex;
    height: 500px;
    padding: 20px 0 20px 0;
    @media (min-width: 768px) {
    }
  `
  return (
    <InfoContainer>
      <div>
        <SvgIcon src='/img/butterchalk_logo.svg' cssClass="logo-churn" color="black" />
        <span>Butter chalk is a chalky chalk talk about chalk and buttertalk about talk</span>
      </div>
      <SvgIcon src='/img/dolomites.svg' cssClass="dolomites" color="black" />
    </InfoContainer>
  )
};