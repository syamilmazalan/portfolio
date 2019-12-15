import styled from "styled-components"

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

  @media (max-width: 500px) {
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
