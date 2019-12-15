import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Row, Col } from "reactstrap"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Main } from "../components/Main"
import { H1, H2, H3 } from "../components/Typography"
import { BioImage, Bio, Button, LanguagesSection } from "../components/About"

import { secondary_color } from "../styles"
import bio_pic from "../images/profilepic.jpg"
import resume from "../pdf/syamil-resume-2019.pdf"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <Main>
        <H1 className="mt-5">
          About <span style={{ color: secondary_color }}>Me</span>
        </H1>
        <Row xs="1" lg="2">
          <Col>
            <BioImage src={bio_pic} alt="Profile picture" />
          </Col>
          <Col>
            <Bio>
              <p className="font-weight-bold">
                Hi, my name is{" "}
                <span style={{ color: secondary_color }}>Syamil</span>.
              </p>
              <p>I am always excited to learn new things.</p>
              <p>
                The best thing about programming is that there is always
                something else to learn!
              </p>
              <Button href={resume} target="_blank">
                Download Resume
              </Button>
            </Bio>
          </Col>
        </Row>
        <LanguagesSection>
          <H2 large>
            Languages &{" "}
            <span style={{ color: secondary_color }}>Technologies</span>
          </H2>
          <H3>A list of all technologies I've used in my projects.</H3>
        </LanguagesSection>
      </Main>
    </Layout>
  )
}

export default AboutPage
