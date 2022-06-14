import React from 'react';
import './signup.css';
// import GoogleButton from "react-google-button";




const signUp = () => {

    return (
        <>
            <div className="big-div1">
                <div className="big-div2">
                    <div className="big-div3">

                        <div className="center">
                            <h2 className="head">Sign Up</h2>
                            <form method="post">
                                <div className="txt_field">
                                    <input type="text" required />
                                    <span></span>
                                    <label>E-mai address</label>
                                </div>
                                <div className="txt_field">
                                    <input type="password" required />
                                    <span></span>
                                    <label>Create Password</label>
                                </div>
                                <div className="txt_field">
                                    <input type="password" required />
                                    <span></span>
                                    <label>Confirm Password</label>
                                </div>
                                <div className="pass">Already have an account?<a className="link" href="#">Login</a></div>
                                <button type='submit' className="signin_pointer">Sign up</button>
                                <hr />
                                {/* <div className="g-btn">
                                    <GoogleButton
                                        type="dark"

                                    />
                                </div> */}


                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default signUp;