import React,{FC} from 'react'
import { NavbarLink } from './NavbarLink';
import { css, jsx } from '@emotion/core'


export const Navbar: FC = (props: any) => {
  return(
    <div css={{paddingTop: '1em'}}>
      <NavbarLink text="Blog" to="#"/>
      <NavbarLink text="About" to="#"/>
      <NavbarLink text="Contact" to="#"/>
    </div>
  )
};