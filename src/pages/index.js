import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import FirstSlide from "../components/first"
import SecondSlide from "../components/second"
import ThirdSlide from "../components/third"
import FourthSlide from "../components/fourth"
import FifthSlide from "../components/fifth"
import SixthSlide from "../components/sixth"
import SeventhSlide from "../components/seventh"
import EighthSlide from "../components/eighth"
import NinethSlide from "../components/nineth"
import TenthSlide from "../components/tenth"
import EleventhSlide from "../components/eleventh"
// import ImageOne from "../components/title-slide-image-1"
// import TitleSlide from "../components/title-slide"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

  <FirstSlide/>
  <SecondSlide/>
  <ThirdSlide/>
  <FourthSlide/>
  <FifthSlide/>
  <SixthSlide/>
  <SeventhSlide/>
  <EighthSlide/>
  <NinethSlide/>
  <TenthSlide/>
  <EleventhSlide/>

  </Layout>
)

export default IndexPage
