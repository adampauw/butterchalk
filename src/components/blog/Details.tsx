import React from "react";
import styled from "@emotion/styled";

interface DetailsProps {
  title: string;
  date: string;
}

export const DetailsContainer = (props: DetailsProps) => {

  const Details = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  `;

  const TextContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: 'Amatic SC', cursive; 
  `;

  const Title = styled.span`
    font-size: 3vw;
    position: absolute;
    top: 60%;
  `;

  const Date = styled.span`
    font-size: 1.5vw;
    position: absolute;
    top: 50%;
  `;

  const Triangle = styled.div`
    width: 0;
    height: 0;
    border-left: 12vw solid transparent;
    border-right: 12vw solid transparent;
    border-bottom: 18vw solid #ffffff70;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <Details>
      <TextContainer>
        <Triangle>
          <Date>{props.date}</Date>
          <Title>{props.title}</Title>
        </Triangle>
      </TextContainer>
    </Details>
  );
}

export default DetailsContainer
