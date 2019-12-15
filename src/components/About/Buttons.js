import styled from "styled-components"
import { readableColor, lighten } from "polished"

import { secondary_color, easeOut } from "../../styles"

export const Button = styled.a`
  display: inline-block;
  background-color: ${secondary_color};
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  font-size: 1rem;
  color: ${readableColor(secondary_color)};
  cursor: pointer;
  ${easeOut};
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    background-color: ${lighten(0.2, secondary_color)};
    color: ${readableColor(lighten(0.2, secondary_color))};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`
