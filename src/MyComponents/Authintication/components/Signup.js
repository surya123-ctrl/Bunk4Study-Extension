import React, { useRef } from 'react';
import { auth, provider} from '../firebase';
import { useNavigate } from "react-router-dom";
import './signup.css';
import { NavLink } from "react-router-dom";
// import GoogleButton from "react-google-button";




const SignUp = () => {
    const emailref = useRef(null);
    const passwordref = useRef(null);
    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
            alert("Please fill up the above box and enter a valid email address")
        })

        // window.location.reload();
        
    }

    if (emailref != null) {
        navigate("/");
    }


    return (
        <>
            <div className="big-div1">
                <div className="big-div2">
                    <div className="big-div3">

                        <div className="center">
                            <h2 className="head">Sign Up</h2>
                            <form method="post">
                                <div className="txt_field">
                                    <input  type="email"  ref={emailref} required />
                                    <span></span>
                                    <label>E-mail address</label>
                                </div>
                                <div className="txt_field">
                                    <input type="password" ref={passwordref} required />
                                    <span></span>
                                    <label>Create Password</label>
                                </div>
                                {/* <div className="txt_field">
                                    <input type="password" required />
                                    <span></span>
                                    <label>Confirm Password</label>
                                </div> */}
                                <div className="pass">Already have an account?<span className="link signin_link">
                                <NavLink to="/Signin"  >
                                   Sign in
                                </NavLink> 
                                </span></div>

                                <button onClick={signUp} className="signin_pointer" >Sign up</button>
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

export default SignUp;