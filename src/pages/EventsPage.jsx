import React from "react";
import LatestEvents from '../components/home/latest-events';
import PastEvents from "../components/events/past-events";

const EventsPage = () => {
    return ( 
        <div>
            <LatestEvents />
            <PastEvents />
        </div>
     );
}
 
export default EventsPage;