import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./mystyles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero hero-index is-dark is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
            СТО "КЛАКСОН" <br /> Пыть-Ях
          </h1>
          <h2 className="subtitle is-4">
            Добро пожаловать на сайт нашего техцентра
          </h2>
          <h3 className="subtitle is-5">
            Ваш автомобиль будет в надежных руках
          </h3>
          {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div> */}
          <button className="button i-button">ЗАПИСЬ НА РЕМОНТ</button>
        </div>
      </div>
    </section>

    <section className="hero is-fullheight-with-navbar is-dark">
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
