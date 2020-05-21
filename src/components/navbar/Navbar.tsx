import React,{FC} from 'react'
import styled from '@emotion/styled';


export const Navbar: FC = (props: any) => {

  const NavbarContainer = styled.div `
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 88%;
    padding-top: 1em;
    margin-right: 2%;
    &:hover a {
      opacity: 0.5;
    }
    a {
      color: white;
      margin: 5px;
      font-size: 25px;
      &:hover {
        opacity: 1;
      }
    }
    @media (min-width: 768px) {
      left: 95%;
    }
  ` 
  return(
    <NavbarContainer>
      <a href="https://www.instagram.com/ehpauw/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
      <a href="https://www.facebook.com/Adam-Pauw-2115750571790087/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-f"></i></a>
      <a href="https://www.linkedin.com/in/adampauw/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
      <a href="https://github.com/adampauw" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
    </NavbarContainer>
  )
};