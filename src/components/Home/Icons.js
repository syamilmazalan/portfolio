import styled from "styled-components"

import { easeOut, secondary_color } from "../../styles"

export const Icons = styled.div`
  margin-top: 1rem;

  a {
    padding: 0.4rem;
    ${easeOut};
    &:hover {
      color: ${secondary_color};
    }
  }
`
