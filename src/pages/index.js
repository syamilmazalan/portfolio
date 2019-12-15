import React from "react"
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import { H1, H2 } from "../components/Typography"
import { MainHome } from "../components/Main"
import { Icons } from "../components/Home"
import { secondary_color } from "../styles"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <MainHome>
      <H1 home large>
        Syamil <span style={{ color: secondary_color }}>Mazalan</span>
      </H1>
      <H2>Web Developer & Programmer</H2>
      <Icons>
        <a href="#">
          <FaTwitter style={{ width: "2.5rem", height: "2.5rem" }} />
        </a>
        <a href="#">
          <FaFacebook style={{ width: "2.5rem", height: "2.5rem" }} />
        </a>
        <a href="#">
          <FaLinkedin style={{ width: "2.5rem", height: "2.5rem" }} />
        </a>
        <a href="#">
          <FaGithub style={{ width: "2.5rem", height: "2.5rem" }} />
        </a>
      </Icons>
    </MainHome>
  </Layout>
)

export default IndexPage
