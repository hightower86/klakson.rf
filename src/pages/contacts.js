import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contacts" />
    <h1>Запись на ремонт</h1>
    <p>Позвоните нам по телефону пожалуйста</p>
    <Link to="/">На главную страницу</Link>
  </Layout>
)

export default SecondPage
