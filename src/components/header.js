import TitleSlide from "../components/title-slide"
import qAward from "../images/QFest-2020.png" 
import LgbtqAward from "../images/lgbtqff.png" 
import ReelAffirmLgbtq from "../images/Reel-affirmations-festival-2020.png" 
import IndyLgbtq from "../images/Indianapolis-LGBT-film-festival-2020.png"
import VaFilmFestival from "../images/virginia-film-festival-2020.png" 
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (
  <header className="header">
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Lipstick <br/> & Leather
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



export default Header
