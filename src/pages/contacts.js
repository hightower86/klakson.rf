import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contacts" />
    <section className="contacts-page">
      <div className="container">
        <h2>Запись на ремонт</h2>
        <p>Позвоните нам по телефону</p>
      </div>
    </section>
    <Link to="/">На главную страницу</Link>
  </Layout>
)

export default SecondPage
