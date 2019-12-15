import styled from "styled-components"

import { secondary_color, easeOut } from "../../styles"

export const Projects = styled.div`
  display: grid;
  grid-gap: 0.7rem;
  grid-template-columns: repeat(3, 1fr);
  img {
    width: 100%;
    border: 3px #fff solid;
    &:hover {
      opacity: 0.5;
      border-color: ${secondary_color};
      ${easeOut}
    }
  }
`
