import styled from "styled-components"
import { readableColor } from "polished"
import { Link } from "gatsby"

import { easeOut, primary_color, secondary_color } from "../../styles"

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
  ${easeOut};
  &:hover {
    color: ${secondary_color};
    text-decoration: none;
  }
`
