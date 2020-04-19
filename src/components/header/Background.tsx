import React from "react";
import styled from "@emotion/styled";

export const Background = () => {
  const Background = styled.div`
    background-image: url("/img/mountain-fog.jpg");
    background-size: cover;
    background-position: center;
    height: 500px;
    position: relative;
  `;

  return <Background />;
};

export default Background;