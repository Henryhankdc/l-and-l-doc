import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
//NOTE Not the actual "FIRST SLIDE".
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const FifthSlide = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "slide-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="TitleSlide-container">
      <div className="TitleSlide-wrapper">
        <h2 className="TitleSlide-title">Setting</h2>
          <p>Rituals, a new queer bar and venue in the Station North neighborhood of Baltimore City; the new home for Gaybash Baltimore.</p>
        </div>
      <Img className="TitleSlide-sixth" fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  )
}

export default FifthSlide
