import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BioImage from './bioimage'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "slide-10.jpg" }) {
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
            <div className="Slide-wrapper flex">
            <div className="Slide-textWrapper lr-padding w-large">
              <h2 className="Slide-title">The Director</h2>
              <p>Emmy Award winning Producer and Director Amy Oden currently works at PBS's Maryland Public Television, where she sheds light on a variety of social and scientific topics, including the Baltimore uprising, fracking, mass incarceration, and the opioid crisis.</p>
              <p>She is currently working on her thrid independent feature, "Calasag", which is fiscally spoinsored by the international Documentary Association, and was granted a fellowship in the Saul Zaents Innovation Fund at Johns Hopkins. She is also teaches intermediate documentary at the University of Maryland.</p>
              <p>Amy holds BA in Jounralism from the University of Maryland, and an MA in Gender and Media from George Washington University. Her work has won Emmy, Davey, and W3 Awards. </p>
              
            </div>
            <div className="Slide-imageWrapper">
            <BioImage/>
            </div>
          
            </div>
          
            
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const SlideTen = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default SlideTen;