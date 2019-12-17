import React from "react"

import Layout from "../components/Layout"
import { Main } from "../components/Main"
import { ContactHeader, ContactText, EmailText } from "../components/Typography"
import { secondary_color } from "../styles"

const ContactPage = () => (
  <Layout>
    <Main>
      <ContactHeader>
        Contact <span style={{ color: secondary_color }}>Me</span>
      </ContactHeader>
      <ContactText>You can reach me by email at:</ContactText>
      <EmailText>smazalan@yahoo.com</EmailText>
      <ContactText>Looking forward to hearing about your project!</ContactText>
    </Main>
  </Layout>
)

export default ContactPage
