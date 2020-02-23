import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SlideTwo from "../components/slidetwo"
import SlideThree from "../components/slidethree"
import SlideFour from "../components/slidefour"
import SlideFive from "../components/slidefive"
import SlideSix from "../components/slidesix"
import SlideSeven from "../components/slideseven"
import SlideEight from "../components/slideeight"
import SlideNine from "../components/slidenine"
import SlideTen from "../components/slideten"
import SlideEleven from "../components/slideeleven"
import SlideTwelve from "../components/slidetwelve"
// import ImageOne from "../components/title-slide-image-1"
// import TitleSlide from "../components/title-slide"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  <SlideTwo/>
  <SlideThree/>
  <SlideFour/>
  <SlideFive/>
  <SlideSix/>
  <SlideSeven/>
  <SlideEight/>
  <SlideNine/>
  <SlideTen/>
  <SlideEleven/>
  <SlideTwelve/>
  </Layout>
)

export default IndexPage
