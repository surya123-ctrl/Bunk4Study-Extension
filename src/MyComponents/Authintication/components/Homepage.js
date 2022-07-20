import React from 'react';
import {auth} from '../firebase'
import {useNavigate} from "react-router-dom";

const Homepage = (props) => {
  const navigate = useNavigate();

  const refreshPage = ()=>{
    auth.signOut();
    // window.location.reload();
    navigate("/");
 }
  return (
    <>
    
      <h1>Thank you for login </h1>
      <h2>{props.userdata.email}</h2>
      <p><button onClick={refreshPage}>Sign out</button></p>
    </>
  )
}

export default Homepage;