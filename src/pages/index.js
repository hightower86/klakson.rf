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
        <h1 className="">
          СТО "КЛАКСОН" <br /> Пыть-Ях
        </h1>
        <h2 className="">Добро пожаловать на сайт нашего техцентра</h2>
        <h3 className="">Ваш автомобиль будет в надежных руках</h3>
        <button className="button i-button">ЗАПИСЬ НА РЕМОНТ</button>
      </div>
    </section>

    <section className="section-next">
      <div className="hero-body">
        <div className="container">
          <h2 className="title is-1"></h2>
        </div>
      </div>
    </section>

    <Link to="/contacts/">Записаться на ремонт</Link>
  </Layout>
)

export default IndexPage
