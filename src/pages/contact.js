import React from "react"

import Layout from "../components/Layout"
import { Main } from "../components/Main"
import { H1, H2 } from "../components/Typography"
import { secondary_color } from "../styles"

const ContactPage = () => (
  <Layout>
    <Main>
      <H1 large>
        Contact <span style={{ color: secondary_color }}>Me</span>
      </H1>
      <H2 small>Looking forward to working together</H2>
    </Main>
  </Layout>
)

export default ContactPage
