import styled from "styled-components"

import { secondary_color } from "../../styles"

export const BioImage = styled.img`
  margin: auto;
  border-radius: 50%;
  border: ${secondary_color} 3px solid;
  display: flex;
  align-items: center;

  @media screen and (max-width: 991px) {
    margin: 2rem auto;
    width: 300px;
  }

  @media screen and (max-width: 991px) {
    width: 250px;
  }
`
