import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import './SRPCard.css';

const SRPCard = () => {

    const [services, setServices] = useState([]);
    const data = [
        {"source": "data","destination": "data" ,"startTime": "data","endTime": "data","opName": "data","busType": "data","trackingUrl": "data"},
        {"source": "data","destination": "data" ,"startTime": "data","endTime": "data","opName": "data","busType": "data","trackingUrl": "data"},
        {"source": "data","destination": "data" ,"startTime": "data","endTime": "data","opName": "data","busType": "data","trackingUrl": "data"},
        {"source": "data","destination": "data" ,"startTime": "data","endTime": "data","opName": "data","busType": "data","trackingUrl": "data"},
    ]

    return (<div className='srp-card-container'>
        {
            data.map(service => {
                return <Card className="card" service={service} ></Card>
            })
        }
    </div>)

}

export default SRPCard;