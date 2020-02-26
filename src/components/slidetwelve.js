import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "slide-12.jpg" }) {
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
            <div className="Slide-wrapper left-align">
            <div className="Slide-textWrapper contact-slide">
              <h2 className="Slide-title">Contact</h2>
              <div className="Slide-directorsContact">
              <p>Amy Oden</p>
              <p><a href="mailto:amyoden@gmail.com?subject=Lipstick and Leather Documentary">amyoden@gmail.com</a></p>
              </div>
              <div className="Slide-producersContact">
              <p>Culhanimal Productions</p>
              <p><a href="mailto:js@culhanimalproductions.com?subject=Lipstick and Leather Documentary">js@culhanimalproductions.com</a></p>
              </div>
            </div>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const SlideTwelve = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default SlideTwelve;