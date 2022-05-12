import AboutSlider from "../components/about-us/about-slider";
import History from "../components/about-us/history";
import FAQs from "../components/about-us/faqs";
import MoreQuestions from "../components/about-us/more-questions";

const AboutPage = () => {
    return ( 
        <div>
            <AboutSlider />
            <History />
            <FAQs />
            <MoreQuestions />
        </div>
     );
}
 
export default AboutPage;