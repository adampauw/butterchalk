import React,{FC} from 'react'
import { NavbarLink } from './NavbarLink';
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled';


export const Navbar: FC = (props: any) => {

  const NavbarContainer = styled.div `
    width: 10%;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 90%;
    padding-top: 1em;
    margin-right: 2%;
  ` 
  return(
    <NavbarContainer>
      <NavbarLink text="Blog" to="#"/>
      <NavbarLink text="About" to="#"/>
      <NavbarLink text="Contact" to="#"/>
    </NavbarContainer>
  )
};