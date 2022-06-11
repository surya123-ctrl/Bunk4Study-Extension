import React, { useRef } from 'react';
import { auth } from '../firebase';
import './Signin.css';
import { useNavigate } from "react-router-dom";

const Signin = () => {
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
            alert("Please fill up the above box")
        })

        // window.location.reload();
    }
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
                        <div className="signin">
                            <form action="" className="formp">
                                <h2 className="head">Bunk4Study</h2>
                                <input className="input" ref={emailref} type="email"  placeholder='Email' />
                                <input ref={passwordref} type="password" className="input1" placeholder='Password' />
                                <button onClick={signIn} className="signin_pointer">Sign in</button>
                                <h6 className="h6">Not yet register?<span onClick={signUp} className="signin_link">Sign up</span></h6>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;