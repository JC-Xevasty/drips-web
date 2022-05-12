import logo from "../../images/logo.png";
import arrowR from "../../icons/arrow-right.svg";
import { Link } from 'react-router-dom';

const HomeAbout = () => {
    return (
        <div className="section-dark">
            <div className="content">
                <div className="home-about">
                    <div className="left">
                        <h2>ABOUT DRCNAI</h2>
                        <p>Del Rosario Compound Neighborhood Association, Inc. (DRCNAI) comprises
                            106 families that recently acquired a 4,604-square meter private
                            property in Barangay Coloong 1 that they have been informally
                            occupying for over five decades now. Although reported as being
                            generally dry, in the past 15 years, the residents say that their
                            housing site is now permanently flooded.</p>
                        <Link to="/about">
                            <div className="read-more">
                                READ MORE
                                <img src={arrowR} alt="" className="icon" />
                            </div>
                        </Link>
                    </div>
                    <div className="right">
                        <img src={logo} alt="DRCNAI Logo" />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAbout;