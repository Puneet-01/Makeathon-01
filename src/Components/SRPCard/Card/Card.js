import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = (props) => {
    return (<div className="card-container">
        <div className='card-inner-flex-item'>
            <h4>{props.data.busType}</h4>
            <h4>{props.data.opName}</h4>
        </div>
        <h4>{props.data.startTime}</h4>
        <h4>{props.data.endTime}</h4>
        <h4 className='tracking-url'> <a href={props.data.trackingUrl} target="_blank">track bus</a> </h4>
    </div>)
}

export default Card;