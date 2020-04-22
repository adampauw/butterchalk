import React,{FC} from 'react'
import { NavbarLink } from './NavbarLink';
import styled from '@emotion/styled';
import isMobile from "../helper/ScreenSize";



export const Navbar: FC = (props: any) => {

  const NavbarContainer = styled.div `
    width: 10%;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 90%;
    padding-top: 1em;
    margin-right: 2%;
    @media (max-width: 768px) {
      left: 85%;
    }
    @media (max-width: 425px) {
      left: 70%;
      width: 30%;
    }
  ` 
  return(
    isMobile() ?
    <div>hihi</div> :
    <NavbarContainer>
      <NavbarLink text="Blog" to="#"/>
      <NavbarLink text="About" to="#"/>
      <NavbarLink text="Contact" to="#"/>
    </NavbarContainer>
  );
};