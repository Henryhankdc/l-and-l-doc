import React from "react"
import qAward from "../images/QFest-2020.png"
import qAwardMobile from "../images/QFest-2020-mobile.png"  
import LgbtqAward from "../images/lgbtqff.png"
import LgbtqAwardMobile from "../images/lgbtqff-mobile.png"  
import ReelAffirmLgbtq from "../images/Reel-affirmations-festival-2020.png" 
import ReelAffirmLgbtqMobile from "../images/Reel-affirmations-festival-2020-mobile.png"
import IndyLgbtq from "../images/Indianapolis-LGBT-film-festival-2020.png"
import IndyLgbtqMobile from "../images/Indianapolis-LGBT-film-festival-2020-mobile.png"
import VaFilmFestival from "../images/virginia-film-festival-2020.png"
import VaFilmFestivalMobile from "../images/virginia-film-festival-2020-mobile.png"  
import LgbtqTff from "../images/LGBTQ-tff-2021.png" 
import LgbtqTffMobile from "../images/LGBTQ-tff-2021-mobile.png"
import LookBook from "../images/2021-L-and-L-Lookbook.pdf"
import OpenRoad from "../images/open-road-film-festival-2022.png" 
import OpenRoadMobile from "../images/open-road-film-festival-2022-mobile.png"
import BethesdaFf from "../images/bethesda-film-festival-2021.png"
import BethesdaFfMobile from "../images/bethesda-film-festival-2021-mobile.png" 

const HeroBanner = () => (
<div className="heroBanner">
    {/* <h1>Lipstick and Leather</h1> */}
    <div className="heroBanner-imageContainer">
        <div className="heroBanner-imageWrapper">
            <img src={VaFilmFestival} className="TitleSlide-header-award" alt="Official Selection: Virginia Film Festival 2020" />
            <img src={VaFilmFestivalMobile} className="TitleSlide-header-award mobile" alt="Official Selection: Virginia Film Festival 2020" />
        </div>
        <div className="heroBanner-imageWrapper">
            <img src={LgbtqAward} className="TitleSlide-header-award" alt="Palm Springs LGBTQ Film Festival" />
            <img src={LgbtqAwardMobile} className="TitleSlide-header-award mobile" alt="Palm Springs LGBTQ Film Festival" />
        </div>
        <div className="heroBanner-imageWrapper">
            <img src={IndyLgbtq} className="TitleSlide-header-award" alt="Official Selection: Indianapolis LGBTQ Festival 2020" />
            <img src={IndyLgbtqMobile} className="TitleSlide-header-award mobile" alt="Official Selection: Indianapolis LGBTQ Festival 2020" />
        </div>
        <div className="heroBanner-imageWrapper">
            <img src={qAward} className="TitleSlide-header-award" alt="Official Selection: Q Fest, St. Louis 2020" />
            <img src={qAwardMobile} className="TitleSlide-header-award mobile" alt="Official Selection: Q Fest, St. Louis 2020" />
        </div>
        <div className="heroBanner-imageWrapper">
            <img src={ReelAffirmLgbtq} className="TitleSlide-header-award" alt="Official Selection: Reel Affirmations, Washington DC's International LGBTQ Film Festival 2020" />
            <img src={ReelAffirmLgbtqMobile} className="TitleSlide-header-award mobile" alt="Official Selection: Reel Affirmations, Washington DC's International LGBTQ Film Festival 2020" />
        </div>
        <div className="heroBanner-imageWrapper">
            <img src={LgbtqTff} className="TitleSlide-header-award" alt="Official Selection: LGBTQ Toronto Film Festival 2021" />
            <img src={LgbtqTffMobile} className="TitleSlide-header-award mobile" alt="Official Selection: LGBTQ Toronto Film Festival 2021" />
        </div>
        <div className="heroBanner-imageWrapper">
            <img src={BethesdaFf} className="TitleSlide-header-award" alt="Official Selection: Bethesda Film Festival 2021" />
            <img src={BethesdaFfMobile} className="TitleSlide-header-award mobile" alt="Official Selection: Bethesda Film Festival 2021" />
        </div>
        <div className="heroBanner-imageWrapper">
            <img src={OpenRoad} className="TitleSlide-header-award" alt="Official Selection: Open Road Film Festival 2022" />
            <img src={OpenRoadMobile} className="TitleSlide-header-award mobile" alt="Official Selection: Open Road Film Festival 2022" />
        </div>
    
    </div>
    <div className="heroBanner-buttonWrapper">
        <a href={LookBook} download className="heroBanner-button">Download Lookbook</a>
    </div>
</div>
)

export default HeroBanner