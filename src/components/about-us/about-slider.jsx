import HeroSlider from "../home/hero-slider";
import hero1 from "../../images/about-slider-1.png";
import hero2 from "../../images/about-slider-2.png";
import hero3 from "../../images/about-slider-3.png";

const AboutSlider = () => {

    const images = [hero1, hero2, hero3];

    return (
        <div className="about-slider-container">
            <HeroSlider images={images} />
            <div className="about-slider-overlay">
                   <div className="overlay-text">
                       <span className="heading">
                           DEL ROSARIO COMPOUND <br /> NEIGHBORHOOD ASSOCIATION INC.
                       </span> <br />
                       Del Rosario Compound Neighborhood Association, Inc. (DRCNAI) comprises <br />
                       106 families that recently acquired a 4,604-square meter private property in <br />
                       Barangay Coloong 1 that they have been informally occupying for over five decades now.
                   </div>
            </div>
        </div>
    );
}

export default AboutSlider;