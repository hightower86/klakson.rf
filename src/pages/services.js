import React from "react"
import Layout from "../components/layout"

const Services = () => {
  return (
    <Layout>
      <section className="service-page">
        <div className="container">
          <h2 className="title">Services</h2>
        </div>
      </section>
      <section className="section-next">
        <div className="container">
          <h2 className="title">Ремонт ходовой части</h2>
        </div>
      </section>
      <section className="section-next">
        <div className="container">
          <h2 className="title">Диагностика двигателя</h2>
        </div>
      </section>
    </Layout>
  )
}

export default Services
