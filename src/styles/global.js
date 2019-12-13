import { createGlobalStyle } from "styled-components"

import { primary_color } from "./variables"

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${primary_color};
  }
`
