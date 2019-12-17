import styled from "styled-components"
import { Dot, Slider } from "pure-react-carousel"

import { elevation, primary_color, secondary_color } from "../../styles"

export const StyledImageLink = styled.a`
  .gatsby-image {
    margin: 1.5rem 3rem 3rem 0;
    ${elevation[0]};

    &:hover {
      ${elevation[1]};
    }

    @media screen and (max-width: 991px) {
      margin: 1.5rem 0 3rem 0;
    }
  }
`

export const StyledSlider = styled(Slider)`
  padding-top: 3rem;

  .slide-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    img {
      max-width: 80px;
      padding-right: 1rem;
      border-right: 3px solid ${secondary_color};
    }
    h5 {
      margin-bottom: 0;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 991px) {
    padding-top: 0rem;
  }
`

export const DotGroup = styled.div`
  display: flex;
  width: 550px;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media screen and (max-width: 890px) {
    width: 500px;
    margin: 5rem 0;
  }
  @media screen and (max-width: 625px) {
    width: 400px;
    margin: 2rem auto;
  }
  @media screen and (max-width: 475px) {
    width: 350px;
  }
  @media screen and (max-width: 420px) {
    width: 300px;
  }
  @media screen and (max-width: 370px) {
    width: 250px;
  }
`

export const StyledDot = styled(Dot)`
  width: 120px;
  padding: 0;
  background: white;
  ${elevation[0]};
  border-radius: 5%;
  color: ${primary_color};
  font-weight: bold;

  &:hover,
  &.carousel__dot--selected {
    ${elevation[1]}
  }

  p {
    margin-bottom: 0;
  }
  .gatsby-logo {
    width: 65%;
  }

  .laravel-logo {
    width: 80%;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 625px) {
    width: 90px;
  }
`
