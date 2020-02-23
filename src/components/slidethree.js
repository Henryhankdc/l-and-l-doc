import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "slide-3.jpg" }) {
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
              <h2 className="Slide-title">Plot</h2>
              <p>DonnaSlash, organizer of Gaybash DC’s monthly alt-dragrevue, has relocated to Baltimore City.</p>
              <p>Gaybash will continue in DC, but Donna wants to bring her girls to Charm City.</p>
              <p>A character study of three alternative queens, <span className="uppercase">Lipstick and Leather</span> follows Donna, Jane, and Anna as they prepare for their first Baltimore show.</p>
            </div>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const SlideThree = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default SlideThree;