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

const TenthSlide = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "slide-11.jpg" }) {
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
      <div className="TitleSlide-wrapper wide">
        <h2 className="TitleSlide-title">Directors Statement</h2>
        <p>Drag is curently having a cultural“moment”, and looking at an underepresented community within this
        larger practice sheds light on power and hierarchy within the art form Drag has been performed for centuries, but what are newer “alt-drag”queens expresing?</p>
        <p><span className="uppercase">Lipstick and Leather</span> looks at the nuanced answer to this question, teasing out larger themes and reflections, and exploring identity, tradition, community, and relationships.</p>
        <p>Drag continues to be a vehicle for the preservation of queer tradition, an art form, and a platform to build relationships within the queer community, as well as with allies. Drag can be a mirror, a way to express utopian or dystopian ideas, or simply an outlet for a talented performer. "Alt-drag" performers in DC and Baltimore are building new auidiences, and making the craft their own.</p>
        <p><span className="uppercase">Lipstick and Leather</span> explores a newer part of a much-beloved tradition.</p>
      </div>
      <Img className="TitleSlide-eleventh" fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  )
}

export default TenthSlide
