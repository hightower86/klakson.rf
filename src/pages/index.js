import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>СТО "КЛАКСОН"</h1>
    <p>Добро пожаловать на сайт нашего техцентра</p>
    <p>Ваш автомобиль будет в надежных руках</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/contacts/">Записаться на ремонт</Link>
  </Layout>
)

export default IndexPage
