import styled from "styled-components"

export const Main = styled.main`
  padding: 4rem;
  min-height: 100vh;

  @media screen and (max-width: 991px) {
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    padding: 2rem;
  }
`

export const MainHome = styled(Main)`
  overflow: hidden;
`
