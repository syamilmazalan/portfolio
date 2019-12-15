import styled from "styled-components"
import { readableColor } from "polished"

import { easeOut, primary_color } from "../../styles"

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
