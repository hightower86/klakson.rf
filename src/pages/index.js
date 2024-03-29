import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./mystyles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="main-page">
      <div className="container">
        <h1 className="title">
          СТО "КЛАКСОН" <br /> Пыть-Ях
        </h1>
        <h2 className="subtitle">Добро пожаловать в наш технический центр</h2>
        <h3 className="subtitle">Ваш автомобиль будет в надежных руках</h3>
        <Link to="/contacts" className="button i-button">
          ЗАПИСАТЬСЯ
        </Link>
      </div>
    </section>

    <section className="section-next">
      <div className="container">
        <h2 className="title">Об автосервисе</h2>
      </div>
    </section>

    <Link to="/contacts/">Записаться на ремонт</Link>
  </Layout>
)

export default IndexPage
