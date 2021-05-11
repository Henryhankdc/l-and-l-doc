import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import qAward from "../images/QFest-2020.png" 
import LgbtqAward from "../images/lgbtqff.png" 
import ReelAffirmLgbtq from "../images/Reel-affirmations-festival-2020.png" 
import IndyLgbtq from "../images/Indianapolis-LGBT-film-festival-2020.png"
import VaFilmFestival from "../images/virginia-film-festival-2020.png" 
import LgbtqTff from "../images/LGBTQ-tff-2021.png" 

const HeroBanner = () => (
<div className="heroBanner">
    {/* <h1>Lipstick and Leather</h1> */}
    <div className="heroBanner-imageContainer">
        <div className="heroBanner-imageWrapper">
            <img src={VaFilmFestival} className="TitleSlide-header-award" alt="Official Selection: Virginia Film Festival 2020" />
        </div>
        <div className="heroBanner-imageWrapper">
            <img src={IndyLgbtq} className="TitleSlide-header-award" alt="Official Selection: Indianapolis LGBTQ Festival 2020" />
        </div>
        <div className="heroBanner-imageWrapper">
            <img src={qAward} className="TitleSlide-header-award" alt="Official Selection: Q Fest, St. Louis 2020" />
        </div>
        <div className="heroBanner-imageWrapper">
            <img src={ReelAffirmLgbtq} className="TitleSlide-header-award" alt="Official Selection: Reel Affirmations, Washington DC's International LGBTQ Film Festival 2020" />
        </div>
        <div className="heroBanner-imageWrapper">
            <img src={LgbtqTff} className="TitleSlide-header-award" alt="Official Selection: LGBTQ Toronto Film Festival 2021" />
        </div>
    
    </div>
</div>
)

export default HeroBanner