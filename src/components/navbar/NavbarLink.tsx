import React from 'react'
import styled from '@emotion/styled'

interface NavbarLinkProps {
  text: string;
  to: string;
}

export const NavbarLink = (props: NavbarLinkProps) => {

  const Link = styled.a`
    margin: 3%;
    color: #f0e1e1c2;
    text-decoration: none;
    font-size: 1.1em;
    /* font-family: 'Quicksand', sans-serif; */
    /* font-family: 'Amatic SC', cursive; */
    font-family: 'Rajdhani', sans-serif;
    transition: color 2s;
    transition: border-bottom .5s;
    &:hover {
      border-bottom: 0.5px solid #f0e1e1;
      color: #f0e1e1 
    }
  `;

  return (
    <>
      <Link href={props.to}>
        {props.text}
      </Link>
    </>
  )
}