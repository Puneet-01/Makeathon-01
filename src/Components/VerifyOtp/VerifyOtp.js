import React, { useState } from 'react';
import './VerifyOtp.css';
import backgroundImage from '../../Assets/generic_banner_Ind.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

const VerifyOtp = (props) => {

    const history = useHistory();

    // console.log(props.location.mobile)

    // document.addEventListener("DOMContentLoaded", function (event) {

    //     function OTPInput() {
    //         const inputs = document.querySelectorAll('#otp > *[id]');
    //         for (let i = 0; i < inputs.length; i++) {
    //             inputs[i].addEventListener('keydown', function (event) {
    //                 if (event.key === "Backspace") {
    //                     inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus();
    //                 } else {
    //                     if (i === inputs.length - 1 && inputs[i].value !== '') {
    //                         return true;
    //                     } else if (event.keyCode > 47 && event.keyCode < 58) {
    //                         inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
    //                     } else if (event.keyCode > 64 && event.keyCode < 91) {
    //                         inputs[i].value = String.fromCharCode(event.keyCode);
    //                         if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
    //                     }
    //                 }
    //             });
    //         };
    //     } OTPInput();


    // });

    document.addEventListener("DOMContentLoaded", function (event) {

        function OTPInput() {
            const inputs = document.querySelectorAll('#otp > *[id]');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].addEventListener('keydown', function (event) {
                    if (event.key === "Backspace") {
                        inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus();
                    } else {
                        if (i === inputs.length - 1 && inputs[i].value !== '') {
                            return true;
                        } else if (event.keyCode > 47 && event.keyCode < 58) {
                            inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
                        } else if (event.keyCode > 64 && event.keyCode < 91) {
                            inputs[i].value = String.fromCharCode(event.keyCode); if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
                        }

                    }
                });
            }
        } OTPInput();


    });

    const verifyOTPHandler = () => {
        const inputs = document.querySelectorAll('#otp > *[id]');
        // let otp = "";
        // for (let i = 0; i < inputs.length; i++) {
        //     otp += inputs[i].value;
        // }
        // console.log(otp)
        history.push("/SourceDestination")
        // return (
        //     <div>

        //         <Switch>
        //             <Route path="/about">
        //                 < VerifyOtp />
        //             </Route>
        //         </Switch>
        //     </div>
        // )
    }

    return (
        <div>
            <img className="backgroundImage" src={backgroundImage} alt='Redbus Logo'></img>
            <div>
                <div className="verify_otp_container">
                    <div className="verify_otp_container">
                        <div className="verify_otp_container">
                            <h6>Verify One Time Password</h6>
                            <div> <span>OTP has been sent to</span> <small>*******9897</small> </div>
                            <div id="otp" class="verify_otp_digits">
                                <input className="verify_input_number" type="text" id="first" maxlength="1" />
                                <input className="verify_input_number" type="text" id="second" maxlength="1" />
                                <input className="verify_input_number" type="text" id="third" maxlength="1" />
                                <input className="verify_input_number" type="text" id="fourth" maxlength="1" />
                                <input className="verify_input_number" type="text" id="fifth" maxlength="1" />
                                <input className="verify_input_number" type="text" id="sixth" maxlength="1" />

                            </div> <div class="mt-4">
                                    <button onClick={verifyOTPHandler} className="verify_otp_button">VERIFY</button>
                                {/* <Link to="/SourceDestination">
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default VerifyOtp;