import HeroSlider from "./hero-slider";
import hero1 from "../../images/hero-1.png";
import hero2 from "../../images/hero-2.png";
import hero3 from "../../images/hero-3.png";

const HomeSlider = () => {

    const images = [hero1, hero2, hero3];

    return ( 
        <HeroSlider images={images} />
     );
}
 
export default HomeSlider;