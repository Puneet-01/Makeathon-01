import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import './SRPCard.css';

import { useLocation } from 'react-router-dom';

const SRPCard = () => {


    const location = useLocation();
    const dataPassed = location.state;

    const [services, setServices] = useState([]);
    const data = [
        { "source": "data", "destination": "data", "startTime": "data", "endTime": "data", "opName": "data", "busType": "data", "trackingUrl": "data" },
        { "source": "data", "destination": "data", "startTime": "data", "endTime": "data", "opName": "data", "busType": "data", "trackingUrl": "data" },
        { "source": "data", "destination": "data", "startTime": "data", "endTime": "data", "opName": "data", "busType": "data", "trackingUrl": "data" },
        { "source": "data", "destination": "data", "startTime": "data", "endTime": "data", "opName": "data", "busType": "data", "trackingUrl": "data" },
    ]

    return (<div className='srp-card-container'><div class="imageStyle" ><img src={"https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg"} alt="BigCo Inc. logo"/></div>
 {
 data.map(service => {
 return <Card className="card" service={service} ></Card>
 })
 }
 </div>)

}

export default SRPCard;