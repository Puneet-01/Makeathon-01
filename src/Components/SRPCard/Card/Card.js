import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = (props) => {
    return (<div className="card-container">
        <div className='card-inner-flex-item'>
            <h4>A/C Sleeper (2+1)</h4>
            <h4>VSR Tours and Travels</h4>
        </div>
        <h4>20:42</h4>
        <h4>06:50</h4>
        <h4 className='tracking-url'> <a href='https://b.redbus.com/cZCGZ84b9' target="_blank">track bus</a> </h4>
    </div>)
}

export default Card;