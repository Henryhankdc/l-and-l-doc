import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import ImageOne from "../components/title-slide-image-1"
import TitleSlide from "../components/title-slide"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TitleSlide />
    <ImageOne/>
  </Layout>
)

export default IndexPage
