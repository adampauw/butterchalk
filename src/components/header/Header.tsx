import React from "react";
import styled from "@emotion/styled";
import { Background } from "./Background";
import { Navbar } from "../navbar/Navbar";
import Overlay from "./Overlay";


export const Header = () => {
  return (
    <Background>
      <Navbar />
      <Overlay width={100} height={500} position={0}/>
      <Overlay width={20} height={500} position={120}/>
    </Background>
   );
};