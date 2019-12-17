import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import Layout from "../components/Layout"
import EHProject from "../components/Projects/EHProject"
import { MainProjects } from "../components/Main"
import { H1 } from "../components/Typography"

import { secondary_color } from "../styles"

const ProjectsPage = () => (
  <Layout>
    <MainProjects>
      <H1 className="my-5">
        My <span style={{ color: secondary_color }}>Projects</span>
      </H1>
      <EHProject />
    </MainProjects>
  </Layout>
)

export default ProjectsPage
