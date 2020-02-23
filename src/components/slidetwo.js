import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "slide-2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className="Slide">
            <div className="Slide-wrapper">
            <div className="Slide-textWrapper w-medium">
              <h2 className="Slide-title">Logline</h2>
              <p>In a buttoned-up city, like DC, what happens when drag queens go rogue?</p>
              <p><span className="uppercase">Lipstick and Leather</span> explores the "alt-drag" community in the nations capital, and how these performers are spreading their influence across the east coast. </p>
            </div>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const SlideTwo = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default SlideTwo;