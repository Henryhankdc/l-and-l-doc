import TitleSlide from "../components/title-slide"
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
