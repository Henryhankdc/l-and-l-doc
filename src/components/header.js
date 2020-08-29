import TitleSlide from "../components/title-slide"
import qAward from "../images/QFest-2020.png" 
import LgbtqAward from "../images/lgbtqff.png" 
import ReelAffirmLgbtq from "../images/Reel-affirmations-festival-2020.png" 
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (
  <header className="TitleSlide-header">
    <div
      style={{
        color: `#fff`,
        margin: `0 auto`,
        maxWidth: 960,
        position: `absolute`,
        padding: `1.45rem 2.75rem`,
        right: 0,
        zIndex: 2

      }} className="TitleSlide-header-wrapper"
    >
      <h1 className="TitleSlide-header-title">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Lipstick <br/> And Leather
        </Link>
      </h1>
      <div className="TitleSlide-header-awardWrapper">
        <div className="TitleSlide-header-imageWrapper">
          <img src={qAward} className="TitleSlide-header-award" alt="Official Selection: Q Fest, St. Louis 2020" />
        </div>
        <div className="TitleSlide-header-imageWrapper">
          <img src={LgbtqAward} className="TitleSlide-header-award" alt="Official Selection: The Palm Spring LGBTQ Film Festival 2020" />
        </div> 
        <div className="TitleSlide-header-imageWrapper">
          <img src={ReelAffirmLgbtq} className="TitleSlide-header-award" alt="Official Selection: Reel Affirmations, Washington DC's International LGBTQ Film Festival 2020" />
        </div> 
      </div>
      
    </div>
    <TitleSlide></TitleSlide>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



export default Header
