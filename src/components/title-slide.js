import React from "react"
import { graphql, StaticQuery  } from "gatsby"

import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "slide-1.jpg" }) {
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
          style={{
          minHeight: 1080,
          height: `100%`
        }}
        >

        <h2 style={{
          color: `white`
        }}> FANTASTIC TEXT</h2>
        </BackgroundImage>
      )
    }}
  />
)

const TitleSlide = styled(BackgroundSection)`
  width: 100%;
  background-position: center center;
  background-attachment:fixed;
  background-repeat: no-repeat;
  background-size: cover;
`

export default TitleSlide
