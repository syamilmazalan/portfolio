import React, { useState } from "react"
import PropTypes from "prop-types"

import { Header } from "./Header"
import { MenuBtn, BtnLine1, BtnLine2, BtnLine3 } from "./HamburgerBtn"
import { Menu, MenuBranding, MenuNav } from "./Menu"
import { NavItem, NavLink } from "./Nav"
import { GlobalStyle } from "../../styles"

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <Header>
        <GlobalStyle />
        <MenuBtn onClick={toggleMenu} show={showMenu}>
          <BtnLine1 show={showMenu}></BtnLine1>
          <BtnLine2 show={showMenu}></BtnLine2>
          <BtnLine3 show={showMenu}></BtnLine3>
        </MenuBtn>

        <Menu show={showMenu}>
          <MenuBranding show={showMenu}></MenuBranding>
          <MenuNav show={showMenu}>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact Me</NavLink>
            </NavItem>
          </MenuNav>
        </Menu>
      </Header>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
