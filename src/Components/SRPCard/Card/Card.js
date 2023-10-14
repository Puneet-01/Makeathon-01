

import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = (props) => {
 return (
 <div class="float-container">
 
 <div class="float-left">
 <text><b>{props.data.startTime} - {props.data.endTime}</b></text>
 <p><b>{props.data.opName}</b></p>
 <p>{props.data.busType})</p> 
 </div>
 <div class="float-right bottomAlign">
 <text> <a href={props.data.trackingUrl}  ><button class="button">Track Bus</button></a> </text></div>
</div>)
}

export default Card;