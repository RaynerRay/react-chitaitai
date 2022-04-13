import React from 'react';
import { Img, MobileIcon, Nav, NavBtn, NavBtnLink, NavContainer, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import {FaBars} from 'react-icons/fa'
const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to='/'><Img src={props.img} alt={props.alt}/> </NavLogo>

          <MobileIcon onClick={props.toggle}> <FaBars /></MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">ABOUT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="products">PRODUCTS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="team">TEAM</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to='footer'> Contact Us </NavBtnLink>
          </NavBtn>
          
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar