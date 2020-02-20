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

const SecondSlide = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "slide-3.jpg" }) {
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
        <h2 className="TitleSlide-title">Plot</h2>
        <p>DonnaSlash, organizer of Gaybash DC’s monthly alt-dragrevue, has relocated to Baltimore City.</p>
        <p>Gaybash will continue in DC, but Donna wants to bring her girls to Charm City.</p>
        <p>A character study of three alternative queens, <span className="uppercase">Lipstick and Leather</span> follows Donna, Jane, and Anna as they prepare for their first Baltimore show.</p>
      </div>
      <Img className="TitleSlide-three" fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  )
}

export default SecondSlide
