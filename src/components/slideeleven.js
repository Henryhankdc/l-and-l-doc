import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "slide-11.jpg" }) {
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
            <div className="Slide-textWrapper director-slide">
              <h2 className="Slide-title">Directors Statement</h2>
              <p>Drag is curently having a cultural“moment”, and looking at an underepresented community within this
              larger practice sheds light on power and hierarchy within the art form Drag has been performed for centuries, but what are newer “alt-drag”queens expresing?</p>
              <p><span className="uppercase">Lipstick and Leather</span> looks at the nuanced answer to this question, teasing out larger themes and reflections, and exploring identity, tradition, community, and relationships.</p>
              <p>Drag continues to be a vehicle for the preservation of queer tradition, an art form, and a platform to build relationships within the queer community, as well as with allies. Drag can be a mirror, a way to express utopian or dystopian ideas, or simply an outlet for a talented performer. "Alt-drag" performers in DC and Baltimore are building new auidiences, and making the craft their own.</p>
              <p><span className="uppercase">Lipstick and Leather</span> explores a newer part of a much-beloved tradition.</p>
            </div>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const SlideEleven = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default SlideEleven;