import React from "react";
import { Link } from 'react-router-dom';


const Question = () => {
  return (
    <>
      <h1 class="mb-1"><b>DOWNLOAD YOUR QUESTIONS PAPERS</b><div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div></h1>

      
      <h2><Link to={"/CseBranch"}><button type="button" class="btn btn-primary">Computer Science</button></Link></h2>

      <h2><Link to={"/EceBranch"}><button type="button" class="btn btn-primary">Electronics and Communications Engineering</button></Link></h2>


      
      <h2><Link to={"/MeBranch"}><button type="button" class="btn btn-primary">Mechanical Engineering</button></Link></h2>

<br/>
<br />
    

    </>
  );
};

export default Question;