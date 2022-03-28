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
import SEO from "../components/seo"
import HeroBanner from '../components/heroBanner'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  <HeroBanner/>
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
