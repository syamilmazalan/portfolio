import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { CarouselProvider, Slide } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { Row, Col } from "reactstrap"
import withSizes from "react-sizes"

import { H3 } from "../Typography"
import {
  DotGroup,
  StyledDot,
  StyledSlider,
  StyledImageLink,
} from "./CarouselStyles"
import { secondary_color } from "../../styles"
import react from "../../images/react.svg"
import gatsby from "../../images/gatsby-logo.svg"
import laravel from "../../images/laravel-1.svg"

const EHProject = ({ xs, sm, md }) => {
  const data = useStaticQuery(graphql`
    query {
      embun_guest: file(relativePath: { eq: "react-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      embun_homes: file(relativePath: { eq: "embunhomes-site.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      embun_homes_tn: file(relativePath: { eq: "embunhomes-site.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const breakpoints = () => {
    if (xs) {
      return 7
    } else if (sm) {
      return 6
    } else if (md) {
      return 5
    } else {
      return 4
    }
  }

  return (
    <>
      <CarouselProvider
        naturalSlideWidth={5}
        naturalSlideHeight={breakpoints()}
        totalSlides={4}
      >
        <Row xs="1" md="2">
          <Col>
            <H3 style={{ color: secondary_color, fontWeight: "bold" }}>
              Embun Homes
            </H3>
            <StyledImageLink href="https://www.embunhomes.com" target="blank">
              <Img
                fluid={data.embun_homes.childImageSharp.fluid}
                alt="Embun Homes website"
                className="rounded gatsby-image"
              />
            </StyledImageLink>
            <DotGroup>
              <StyledDot slide={0}>
                <Img
                  fluid={data.embun_homes_tn.childImageSharp.fluid}
                  alt="Embun Homes overview"
                />
              </StyledDot>
              <StyledDot slide={1}>
                <img src={gatsby} alt="Gatsby logo" className="gatsby-logo" />
              </StyledDot>
              <StyledDot slide={2}>
                <img src={react} alt="React logo" className="w-75" />
              </StyledDot>
              <StyledDot slide={3}>
                <img
                  src={laravel}
                  alt="Laravel logo"
                  className="laravel-logo"
                />
              </StyledDot>
            </DotGroup>
          </Col>
          <Col>
            <StyledSlider>
              <Slide index={0}>
                <h5>Overview</h5>
                <p>
                  Embun Homes is a homestay company located in Malaysia with
                  several properties.
                </p>
                <p>The whole project consisted of 3 different applications:</p>
                <ol>
                  <li>The frontend website for guests.</li>
                  <li>An admin panel to manage bookings.</li>
                  <li>
                    An API to provide a database for both frontend applications.
                  </li>
                </ol>
              </Slide>
              <Slide index={1}>
                <div className="slide-wrapper">
                  <img src={gatsby} alt="Gatsby logo" />
                  <h5>Guest App</h5>
                </div>
                <p>
                  The guest site was created with Gatsby and hosted on Netlify.
                </p>
                <p>
                  This is the main site where potential customers can look up
                  information about the homes, available dates and book rooms.
                </p>
              </Slide>
              <Slide index={2}>
                <div className="slide-wrapper">
                  <img src={react} alt="React logo" />
                  <h5>Admin Panel</h5>
                </div>
                <p>
                  The admin panel was created with React and hosted on Netlify.
                </p>
                <p>
                  It acts as an interface for the custom API and allows the
                  admin to manage bookings easily.
                </p>
              </Slide>
              <Slide index={3}>
                <div className="slide-wrapper">
                  <img src={laravel} alt="Laravel logo" />
                  <h5>API</h5>
                </div>
                <p>
                  The API was created with Laravel and hosted on Digital Ocean.
                </p>
                <p>
                  It providers controllers for interacting with the database.
                </p>
                <p>This allows for creation of a mobile app later.</p>
              </Slide>
            </StyledSlider>
          </Col>
        </Row>
      </CarouselProvider>
    </>
  )
}

const mapSizesToProps = ({ width }) => ({
  xs: width < 350,
  sm: width < 450,
  md: width < 769,
})

export default withSizes(mapSizesToProps)(EHProject)
