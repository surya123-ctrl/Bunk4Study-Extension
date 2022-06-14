import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { auth } from "./MyComponents/Authintication/firebase";
import Signin from "./MyComponents/Authintication/components/Signin";
import Signup from "./MyComponents/Authintication/components/Signup";
import Signout from "./MyComponents/Authintication/Signout";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from './MyComponents/Header';
import Home from './MyComponents/Home';
import About from './MyComponents/About';
import Blog from './MyComponents/Blog';
import ContactUs from './MyComponents/ContactUs';
import Credits from './MyComponents/Credits';
import Notes from './MyComponents/Notes';
import Question from './MyComponents/Question';
import Footer from './MyComponents/Footer';
import Event from './MyComponents/Event';
import Sem1 from './MyComponents/firstyear/semester1/Sem1';
import CseBranch from './MyComponents/Branch/CseBranch';
import Sem12020 from './MyComponents/firstyear/semester1/Sem12020';
import Sem12021 from './MyComponents/firstyear/semester1/Sem12021';
import Sem12019 from './MyComponents/firstyear/semester1/Sem12021';
import EceBranch from './MyComponents/Branch/EceBranch';
import MeBranch from './MyComponents/Branch/MeBranch';
import ScrollToTop from './MyComponents/scrollToTop';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";




function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])

  return (



    <>
      <div
        style={{
          backgroundColor: 'white',

        }}
      >



        <ScrollToTop />
        <Header User={user} />



        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Question" element={<Question />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Credits" element={<Credits />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Sem12020" element={<Sem12020 />} />
          <Route path="/Sem12021" element={<Sem12021 />} />
          <Route path="/Sem12019" element={<Sem12019 />} />
          <Route path="/Sem1" element={<Sem1 />} />
          <Route path="/CseBranch" element={<CseBranch />} />
          <Route path="/EceBranch" element={<EceBranch />} />
          <Route path="/MeBranch" element={<MeBranch />} />
          <Route path="/Signout" element={<Signout />} />
          <Route path="/Signin" element={<Signin />} />
          {/* <Route path="/signup" element={<Signup />} /> */}

          {/* <Navigate to="/" /> */}
          {/* <Navigate to="/" /> */}
          <Route path="/user" element={<Navigate to="/" />} />
        </Routes>

        <div>
          <Footer />
        </div>
      </div>
    </>


  );
};

export default App;
