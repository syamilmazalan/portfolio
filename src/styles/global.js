import { createGlobalStyle } from "styled-components"
import { readableColor, rgba } from "polished"

import { primary_color } from "./variables"

export const GlobalStyle = createGlobalStyle`
  &&& {
    * {
    box-sizing: border-box;
  }

  body {
    background-image: linear-gradient(to bottom left, ${rgba(
      primary_color,
      0.9
    )}, ${rgba("#242F6A", 0.7)});
    color: ${readableColor(primary_color)};
    height: 100%;
    margin: 0;
    font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.5;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
  }
`
