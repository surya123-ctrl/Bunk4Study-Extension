import React, { useRef } from 'react';
import { auth, provider} from '../firebase';
import './Signin.css';
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
// import Signup from "./Signup";
import { NavLink } from "react-router-dom";

const Signin = () => {
    const emailref = useRef(null);
    const passwordref = useRef(null);
    const navigate = useNavigate();

    const GoogleSignIn = ()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
           console.log(result);
          })
        .catch(error=>{
            console.log(error);
            alert(error);
        }
        )
    }

    // const signUp = (e) => {
    //     e.preventDefault();
    //     auth.createUserWithEmailAndPassword(
    //         emailref.current.value,
    //         passwordref.current.value
    //     ).then(user => {
    //         console.log(user)
    //     }).catch(err => {
    //         console.log(err)
    //         alert("Please fill up the above box")
    //     })

    //     // window.location.reload();
        
    // }

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
            alert("This email id has not been registered yet, so click on Sign up button")
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
                        <h2 className="head1">Sign In</h2>
                            <form action="" className="formp">
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
                                
                                <div className="pass1">forget<a className="link" href="#">Password?</a></div>
                                <button onClick={signIn} className="signin_pointer">Sign In</button>
                                {/* <h6 className="h6">Don't have an account?<span onClick={signUp} className="signin_link"><Signup/></span></h6> */}
                                <h6 className="h6">Don't have an account?<span className="signin_link">
                                <NavLink to="/signup">
                                         Sign up
                                 </NavLink>
                                   
                                </span> 
                                 </h6>

                            </form>
                            <div className="g-btn" >
                                   <span onClick={GoogleSignIn} ><GoogleButton type="dark" /></span> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;