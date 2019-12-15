import styled from "styled-components"
import { darken } from "polished"

import { easeOut, primary_color } from "../../styles"

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
  @media (max-width: 500px) {
    width: 0%;
  }
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
  @media (max-width: 500px) {
    width: 100%;
  }
`
