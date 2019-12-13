import styled from "styled-components"
import { readableColor, darken } from "polished"
import { Link } from "gatsby"

import { easeOut, primary_color, secondary_color } from "../../styles"

export const MenuBtn = styled.div`
  position: absolute;
  z-index: 3;
  right: 35px;
  top: 35px;
  cursor: pointer;
  ${easeOut};
  transform: ${props => props.show && "rotate(180deg)"};
`
const BtnLine = styled.div`
  width: 28px;
  height: 3px;
  margin: 0 0 5px 0;
  background: ${readableColor(primary_color)};
  ${easeOut};
`

export const BtnLine1 = styled(BtnLine)`
  transform: ${props => props.show && "rotate(45deg) translate(5px, 5px)"};
`

export const BtnLine2 = styled(BtnLine)`
  opacity: ${props => props.show && "0"};
`

export const BtnLine3 = styled(BtnLine)`
  transform: ${props => props.show && "rotate(-45deg) translate(7px, -6px)"};
`

export const Menu = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  opacity: 0.9;
  visibility: ${props => (props.show ? "visible" : "hidden")};
`

const menuChild = `
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  float: left;
  width: 50%;
  height: 100vh;
  overflow: hidden;
`

export const MenuBranding = styled.div`
  ${menuChild}
  background: ${primary_color};
  transform: ${props =>
    props.show ? "translate3d(0, 0, 0)" : "translate3d(0, 100%, 0)"};
  ${easeOut};
`

export const MenuNav = styled.ul`
  ${menuChild}
  margin: 0;
  padding: 0;
  background: ${darken(5, primary_color)};
  list-style: none;
  transform: ${props =>
    props.show ? "translate3d(0, 0, 0)" : "translate3d(0, -100%, 0)"};
  ${easeOut}
`

export const Portrait = styled.div`
  width: 250px;
  height: 250px;
  background: url("../img/portrait.jpg");
  border-radius: 50%;
  border: solid 3px ${secondary_color};
`

export const NavItem = styled.li`
  transform: ${props =>
    !props.show ? "translate3d(0, 0, 0)" : "translate3d(600px, 0, 0)"};
  ${easeOut};
`

export const NavLink = styled(Link)`
  display: inline-block;
  position: relative;
  font-size: 30px;
  text-transform: uppercase;
  padding: 1rem 0;
  font-weight: 300;
  color: ${readableColor(primary_color)};
  text-decoration: none;
  ${easeOut}
  &:hover {
    color: ${secondary_color};
  }
`
