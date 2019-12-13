import React, { useState } from "react"
import PropTypes from "prop-types"

import {
  MenuBtn,
  BtnLine1,
  BtnLine2,
  BtnLine3,
  Menu,
  MenuBranding,
  Portrait,
  MenuNav,
  NavItem,
  NavLink,
} from "./LayoutStyles"
import { GlobalStyle } from "../../styles"

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div>
      <GlobalStyle />
      <MenuBtn onClick={toggleMenu} show={showMenu}>
        <BtnLine1 show={showMenu}></BtnLine1>
        <BtnLine2 show={showMenu}></BtnLine2>
        <BtnLine3 show={showMenu}></BtnLine3>
      </MenuBtn>

      <Menu show={showMenu}>
        <MenuBranding show={showMenu}>
          <Portrait></Portrait>
        </MenuBranding>
        <MenuNav show={showMenu}>
          <NavItem>
            <NavLink to="contact.html">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="about.html">About Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="work.html">My Work</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contact.html">How To Reach Me</NavLink>
          </NavItem>
        </MenuNav>
      </Menu>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
