import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contacts" />
    <section className="contacts-page">
      <div className="container">
        <h2 className="title">Запись на ремонт (механики)</h2>
        <h3 className="subtitle">тел. +7 922 444-47-60</h3>
        <h3 className="subtitle">тел. +7 922 436-08-10</h3>
      </div>
    </section>
    <Link to="/">На главную страницу</Link>
  </Layout>
)

export default SecondPage
