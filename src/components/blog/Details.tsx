import React from "react";
import styled from "@emotion/styled";

interface DetailsProps {
  title: string;
  description: string;
  date: string;
}

export const DetailsContainer = (props: DetailsProps) => {

  const Details = styled.div`
    width: 25%;
  `;

  return ( 
      <Details>
        <span>{props.title}</span>
        <span>{props.description}</span>
        <span>{props.date}</span>
      </Details>
  );
}

export default DetailsContainer
