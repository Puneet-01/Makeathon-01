import React, { useState } from 'react';
import '../Home/Home.css';
import backgroundImage from '../../Assets/generic_banner_Ind.png'
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

const Home = () => {

    const history = useHistory();

    const [mobileNumber, setMobileNumber] = useState(0);
    
    const inputChangeHandler = (val) => {
        setMobileNumber(val)
    }

    const getOtpHandler = () => {
        const mobileNumberPattern = /^\d{10}$/;
        console.log(mobileNumber)

        if (!mobileNumberPattern.test(mobileNumber)) {
            alert("Please enter valid mobile number")
            return
        }

        let mobileNumberIn = "91" + mobileNumber;

        axios.get(`http://10.12.4.25:8080/get-otp?mobileNumber=${mobileNumberIn}`).then(resp => {
            console.log(resp)
            history.push("/VerifyOtp")
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="Home">
            <img className="backgroundImage" src={backgroundImage} alt='Redbus Logo'></img>
            <div style={{"padding-left": "75px"}}>
            <h3 className="input_text">Create Account or Sign in</h3>
            <div className="mobile_input">
                <input onChange={(e) => inputChangeHandler(e.target.value)} className="input" type="tel" id="mobileNumber" name="mobileNumber" placeholder="Enter your mobile number" />
                    <button className="generate_otp" onClick={getOtpHandler}>GENERATE OTP (ONE TIME PASSWORD)</button>

                {/* <Link to={{pathname:"/VerifyOtp", state: mobileNumber}}>
                </Link> */}
                </div>
            </div>
        </div>
    );
}

export default Home;