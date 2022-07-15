import React from 'react';
import HomePage from "./components/Homepage"

const Signout = (props) => {
  return (
    <>
          <HomePage userdata={props.User}/>
    </>
  )
}

export default Signout;