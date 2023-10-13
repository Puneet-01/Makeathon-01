import React, { useState } from 'react';
import '../Home/Home.css';
import backgroundImage from '../../Assets/generic_banner_Ind.png'
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Home = ({ history }) => {

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

        axios.get(`http://localhost:8080/get-otp?mobileNumber=${mobileNumberIn}`).then(resp => {
            console.log(resp)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="Home">
            <img className="backgroundImage" src={backgroundImage} alt='Redbus Logo'></img>
            <h3 className="input_text">Create Account or Sign in</h3>
            <div className="mobile_input">
                <input onChange={(e) => inputChangeHandler(e.target.value)} className="input" type="tel" id="mobileNumber" name="mobileNumber" placeholder="Enter your mobile number" />
                <Link to="/VerifyOtp">
                    <button className="generate_otp" onClick={getOtpHandler}>GENERATE OTP (ONE TIME PASSWORD)</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;