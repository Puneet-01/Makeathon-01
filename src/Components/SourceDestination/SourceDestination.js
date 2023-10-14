// import { Form,FormGroup,Input,Label,Button } from "reactstrap"
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import './SourceDestination.css'
import axios from "axios";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Card from '../SRPCard/Card/Card';
import ParentComponent from '../ParentComponent/ParentComponent';

const SourceDestination = (props) => {

  const { newState, setNewState } = props;
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("")
  const [operator, setOperator] = useState("")
  const handleSourceChange = (e) => {
    e.preventDefault()
    setSource(e.target.value);
  }
  const handleDestinationChange = (e) => {
    e.preventDefault()
    setDestination(e.target.value);
  }
  const handleOperatorChange = (e) => {
    e.preventDefault()
    setOperator(e.target.value);
  }

  const [posts, setPosts] = useState([])

  // useEffect(() => {

  // }, [posts.length])

  const [showLoader, setShowLoader] = useState(false);
  
  
  const handleSubmit = () => {
    
    let url="http://report2.yourbus.in:1111/serviceDetails/getSrvcFromSD?source="+source+"&destination="+destination+"&opName="+operator
    
    // let url = "https://jsonplaceholder.typicode.com/posts"
    axios.get(url).then(res => {
      console.log(res.data);
      setPosts(res.data)
      setShowLoader(false)
    }).catch(err => {
      console.log(err);
    })

    console.log("48", posts)
  }

  return (
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

              onChange={(e) => handleSourceChange(e)}
              placeholder="Source"
              value={source}
              name="source"
            />
            <input className="rounded-input" placeholder="Destination"
              type="text"
              name="destination"
              onChange={(e) => handleDestinationChange(e)}
              value={destination} />

            <input className="rounded-input" type="text" placeholder="Operator Id"
              name="operator"
              onChange={(e) => handleOperatorChange(e)}
              value={operator} />
          </div>
        </div>
        <div className="column image-column" >
          <img src={require('./Track_my_bus.png')} alt="Your Image" className="side-image" />
        </div>
      </div>

      <div className="button-container">
        <button className="responsive-button" type="submit" onClick={handleSubmit}>Track Your Bus</button>
      </div>
      {/* <Link to="/srp-page" >
        <div className="button-container">
        </div>
      </Link> */}

      {posts.length > 0 && showLoader === false ? <ParentComponent data = {posts} ></ParentComponent> : null
      }

    </div>
  )
}

export default SourceDestination