import React from "react"

import Layout from "../components/Layout"
import { Main } from "../components/Main"
import { H1, H2 } from "../components/Typography"
import { Projects } from "../components/Work"
import { secondary_color } from "../styles"

const WorkPage = () => (
  <Layout>
    <Main>
      <H1 large>
        My <span style={{ color: secondary_color }}>Work</span>
      </H1>
      <H2 small>Check out some of my projects...</H2>
      <Projects>
        <div>
          <a href="#">
            <img src="" alt="Project1" />
          </a>
        </div>
      </Projects>
    </Main>
  </Layout>
)

export default WorkPage
