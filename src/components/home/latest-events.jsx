import image1 from "../../images/mini-free-store-project.png";
import image2 from "../../images/negosyo-basics.png";
import image3 from "../../images/mcgi-feeding-program.png";

import arrowR from "../../icons/arrow-right.svg";
import { Link } from 'react-router-dom';


const LatestEvents = () => {
    function EventItem(props) {
        return (
            <div className="event-item">
                <img src={props.img} alt="" className="event-image" />
                <div className="event-body">
                    <div className="tag-date">
                        <div className="event-tag">BUSINESS</div>
                        <div className="event-date">April 27, 2020</div>
                    </div>
                    <div className="event-title">{props.title}</div>
                    <div className="event-description">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea labore eaque, totam temporibus nisi magni
                            quo hic cupiditate, explicabo culpa, tempora iusto maxime eum incidunt perspiciatis. Modi sequi maiores
                            quas officiis praesentium ut natus dignissimos placeat iure, harum aperiam. Vero?
                        </p>
                    </div>
                    <div className="event-footer">
                        <Link to="/article">
                            <div className="read-more">
                                READ MORE
                                <img src={arrowR} alt="" className="icon" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="content">
            <h2>LATEST EVENTS</h2>
            <div className="events">
                <EventItem
                    img={image1}
                    title="Mini Free Store Project"
                    description="Pag abot ng simpleng tulong para sa ating mga kapwang nangangailangan kung saan
                    umabot po sa higit 170 pamilya ang nabiyayaan."
                />
                <EventItem
                    img={image2}
                    title="Negosyo Basics"
                />
                <EventItem
                    img={image3}
                    title="MCGI Feeding Program"
                />
            </div>
        </div>
    );
}

export default LatestEvents;