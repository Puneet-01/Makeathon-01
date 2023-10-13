// import { Form,FormGroup,Input,Label,Button } from "reactstrap"
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './SourceDestination.css'
import axios from "axios";

const SourceDestination = () =>{
  const [source,setSource] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault()
    setSource(e.target.value);
    let url = "http://10.5.10.113:3000/v14/getlist?locale=es&q="+source+"&channel=WEB&locationType=BPDP&cc=IND&limit=10"
    axios.get(url)
    .then(res=>console.log(res.data.response))
    console.log(source)
  };
  
    return(
        <div>
            
            <div className="header-container">
      <h2 className="heading">Track Your Bus</h2>
      <p className="subheading">You can track any bus with redbus</p>
      <div className="header">

      </div>
        <h3 className="main-heading">Source & Destination</h3>
      </div>
      <div className="container">
     
      <div className="column input-column">
      <div className="input-boxes">
      <input className="rounded-input" 
        type="text"
        defaultValue={source}
        onChange={(e) => handleInputChange(e)}
        placeholder="Source"
        value = {source}

      />
      <input className="rounded-input" type="text" placeholder="Destination" />
      <input className="rounded-input" type="text" placeholder="Operator Id" />
    </div>
      </div>
      <div className="column image-column" >
      <img src={require('./Track my bus.png')} alt="Your Image" className="side-image"/>
      </div>
    </div>
    <div className="button-container">
      <button className="responsive-button">Track Your Bus</button>
    </div>
        </div>
    )
}

export default SourceDestination