import { useState } from "react";
import { Link } from 'react-router-dom';
import arrowR from "../../icons/arrow-right.svg";
import pagePrev from "../../icons/page-prev.svg"
import pagePrevDis from "../../icons/page-prev-disabled.svg"
import pageNext from "../../icons/page-next.svg";
import pageNextDis from "../../icons/page-next-disabled.svg";

import homelessImg from "../../images/homeless.png"
import cleanUpImg from "../../images/clean-up.png";
import japaneseImg from "../../images/japanese.png";
import reliefImg from "../../images/relief-goods.png";

const PastEvents = () => {
    function EventItem(props) {
        return (
            <div className="event-item-long">
                <img src={props.data.img} alt="event" className="event-image" />
                <div className="event-body">
                    <div className="tag-date">
                        <div className="event-tag">COMMUNITY</div>
                        <div className="event-date">April 27, 2020</div>
                    </div>
                    <div className="event-title">{props.data.title}</div>
                    <div className="event-description">{props.data.body}</div>
                    <div className="event-footer">
                        <Link to="/about">
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

    const [topPosition, setTopPosition] = useState("");

    function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
        const [pages] = useState(Math.ceil(data.length / dataLimit));
        const [currentPage, setCurrentPage] = useState(1);

        function goToNextPage() {
            setCurrentPage((page) => page + 1);
            window.scrollTo({ behavior: 'smooth', top: "645" });
        }

        function goToPreviousPage() {
            setCurrentPage((page) => page - 1);
            window.scrollTo({ behavior: 'smooth', top: "645" });
        }

        function changePage(event) {
            const pageNumber = Number(event.target.textContent);
            setCurrentPage(pageNumber);
            window.scrollTo({ behavior: 'smooth', top: "645" });
        }

        const getPaginatedData = () => {
            const startIndex = currentPage * dataLimit - dataLimit;
            const endIndex = startIndex + dataLimit;
            return data.slice(startIndex, endIndex);
        };

        const getPaginationGroup = () => {
            let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
            return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
        };

        // useEffect(() => {
        //     window.scrollTo({ behavior: 'smooth', top: "645" });
        //   }, [currentPage]);

        return (
            <div>
                {/* show the posts, 10 posts at a time */}
                <div className="dataContainer">
                    {getPaginatedData().map((d, idx) => (
                        <RenderComponent key={idx} data={d} />
                    ))}
                </div>

                {/* show the pagiantion
                it consists of next and previous buttons
                along with page numbers, in our case, 5 page
                numbers at a time
                */}
                <div className="pagination">
                    {/* previous button */}
                    {(currentPage === 1) ?
                        <div className="page-prev disabled" onClick={goToPreviousPage}>
                            <img src={pagePrevDis} alt="Previous Page" />
                        </div> :
                        <div className="page-prev" onClick={goToPreviousPage}>
                            <img src={pagePrev} alt="Previous Page" />
                        </div>
                    }

                    {/* show page numbers */}
                    {getPaginationGroup().map((item, index) => (
                        (item <= pages) && <div
                            key={index}
                            onClick={changePage}
                            className={`paginationItem ${currentPage === item ? 'active' : null}`}><span>{item}</span></div>
                    ))}

                    {/* next button */}
                    {(currentPage >= pages) ?
                        <div className="page-next disabled" onClick={goToNextPage}>
                            <img src={pageNextDis} alt="Next Page" />
                        </div> :
                        <div className="page-next" onClick={goToNextPage}>
                            <img src={pageNext} alt="Next Page" />
                        </div>
                    }
                </div>
            </div>
        );
    }

    const events = [
        {
            img: homelessImg,
            title: "Homeless People's Federation Philippines Relief Goods Distribution",
            body: "Taos pusong pasasalamat ang ipinaaabot ng DRCHOA sa Homeless People's Federation Philippines, PACSII, Fr. Rolan sa 300 pirasong itlog ng itik at kay Ms. Puri Gamon sa kanyang cash donation sa samahan. Nairaos ang isang masarap na almusal ng 168 na pamilya dito sa amin."
        },
        {
            img: cleanUpImg,
            title: "DRCNAI CLEAN UP DRIVE",
            body: "MASSIVE cleanup efforts of the Department of Environment and Natural Resources (DENR) and the Bulacan Provincial Government resulted in the removal of accumulated solid waste and water hyacinths that pollute Del Rosario Waters."
        },
        {
            img: japaneseImg,
            title: "Japanese Visits DRCNAI Community",
            body: "Japanese Visits the Del Rosario Residents and teach kids paper Origami."
        },
        {
            img: reliefImg,
            title: "Relief Goods Distribution",
            body: "Maraming maraming salamat po Lord sa biyayang ipinagkaloob mo sa aming pamayanan. Isang magalang na PAGPUPUGAY po para sa mga taong iyong ginamit upang ang iyong biyaya ay makarating sa amin. Sa Caritas Manila, PACSII sa pangunguna ni Fr. Roland Tuazon, Homeless Peoples."
        }
    ];

    return (
        <div className="content">
            <h2 ref={el => {
                if (!el) return;
                setTopPosition(el.getBoundingClientRect().y);
            }}>PAST EVENTS</h2>
            <Pagination
                data={events}
                RenderComponent={EventItem}
                pageLimit={3}
                dataLimit={3}
            />
        </div>
    );
}

export default PastEvents;