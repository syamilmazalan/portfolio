import styled from "styled-components"
import { secondary_color } from "../styles"

const heading = `
  margin: 0;
  font-weight: 400;
`

export const H1 = styled.h1`
  ${heading};
  font-family: Rockwell;
  margin-top: ${props => props.home && "20vh"};
  font-size: ${props => (props.home ? "6rem" : "5rem")};
  margin-bottom: 1rem;

  @media (max-width: 991px) {
    font-size: ${props => !props.home && "4rem"};
  }

  @media (max-width: 514px) {
    font-size: ${props => (props.home ? "4rem" : "3rem")};
  }
`
export const H2 = styled.h2`
  ${heading}
  font-size: ${props => props.large && "4rem"};
  font-family: ${props => props.large && "Rockwell"};
  margin-bottom: 2rem;
  padding: ${props => props.small && "0.2rem 1rem"};

  @media (max-width: 558px) {
    font-size: ${props => props.large && "3rem"};
  }
  
  @media (max-width: 389px) {
    font-size: ${props => props.large && "2.5rem"};
  }
`
export const H3 = styled.h3`
  ${heading}
  font-size: ${props => (props.large ? "3rem" : "1.5rem")};
  margin-bottom: ${props => props.small && "2rem"};
  padding: ${props => props.small && "0.2rem 1rem"};
  font-weight: ${props => props.bold && "bold"};
`

export const P = styled.p`
  @media (max-width: 460px) {
    font-size: 1.5rem;
  }
`

export const ContactHeader = styled(H1)`
  margin-top: 3rem;

  @media screen and (max-width: 514px) {
    margin-top: 5rem;
  }
  @media screen and (max-width: 340px) {
    font-size: 2rem;
  }
`

export const ContactText = styled(P)`
  font-size: 2rem;
  margin-top: 4rem;
`

export const EmailText = styled(P)`
  color: ${secondary_color};
  margin: 2rem 0 2rem 2rem;
  font-size: 2rem;

  @media screen and (max-width: 340px) {
    margin: 2rem 0;
  }
`
