import React from 'react';
import {auth} from '../firebase'
import {useNavigate} from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();

  const refreshPage = ()=>{
    auth.signOut();
    // window.location.reload();
    navigate("/");
 }
  return (
    <>
      <h1>Thank you for login</h1>
      <p><button onClick={refreshPage}>Sign out</button></p>
    </>
  )
}

export default Homepage;