import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "slide-7.jpg" }) {
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
              <h2 className="Slide-title">Cast</h2>
              <p>Donna Slash, the founder and core organizer of Gaybash.</p>
              <p>Donna has appeared at RuPaul's DragCon, starred in Troma Entertainment's <span className="uppercase">Kill Dolly Kill</span>, and fronted the DC punk band Homosuperior.</p>
            </div>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const SlideSeven = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default SlideSeven;