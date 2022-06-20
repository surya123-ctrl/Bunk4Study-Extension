/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { auth } from "./MyComponents/Authintication/firebase";
import Signin from "./MyComponents/Authintication/components/Signin";
// eslint-disable-next-line no-unused-vars
import Signup from "./MyComponents/Authintication/components/Signup";
import Signout from "./MyComponents/Authintication/Signout";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from "./MyComponents/Header";
import Home from "./MyComponents/Home";
import About from "./MyComponents/About";
import Blog from "./MyComponents/Blog";
import ContactUs from "./MyComponents/ContactUs";
import Credits from "./MyComponents/Credits";
import Notes from "./MyComponents/Notes";
import Privacy from "./MyComponents/Privacy";
import Question from "./MyComponents/Question";
import Footer from "./MyComponents/Footer";
import Event from "./MyComponents/Event";
import CseBranch from "./MyComponents/Branch/Cse/CseBranch";
import EceBranch from "./MyComponents/Branch/Ece/EceBranch";
import MeBranch from "./MyComponents/Branch/Me/MeBranch";
import CeBranch from "./MyComponents/Branch/Ce/CeBranch";
import EeBranch from "./MyComponents/Branch/Ee/EeBranch";
import BeBranch from "./MyComponents/Branch/Be/BeBranch";
import CseSem1 from "./MyComponents/Branch/Cse/CseSem1/CseSem1";
import CseSem2 from "./MyComponents/Branch/Cse/CseSem2/CseSem2";
import CseSem3 from "./MyComponents/Branch/Cse/CseSem3/CseSem3";
import CseSem4 from "./MyComponents/Branch/Cse/CseSem4/CseSem4";
import CseSem5 from "./MyComponents/Branch/Cse/CseSem5/CseSem5";
import CseSem6 from "./MyComponents/Branch/Cse/CseSem6/CseSem6";
import CseSem7 from "./MyComponents/Branch/Cse/CseSem7/CseSem7";
import CseSem8 from "./MyComponents/Branch/Cse/CseSem8/CseSem8";
import CseSem12019 from "./MyComponents/Branch/Cse/CseSem1/CseSem12019";
import CseSem12020 from "./MyComponents/Branch/Cse/CseSem1/CseSem12020";
import ScrollToTop from "./MyComponents/scrollToTop";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };
      if (userAuth) {
        console.log(userAuth);
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
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
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Credits" element={<Credits />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/CseSem1" element={<CseSem1 />} />
          <Route path="/CseSem2" element={<CseSem2 />} />
          <Route path="/CseSem3" element={<CseSem3 />} />
          <Route path="/CseSem4" element={<CseSem4 />} />
          <Route path="/CseSem5" element={<CseSem5 />} />
          <Route path="/CseSem6" element={<CseSem6 />} />
          <Route path="/CseSem7" element={<CseSem7 />} />
          <Route path="/CseSem8" element={<CseSem8 />} />
          <Route path="/Sem12019" element={<CseSem12019 />} />
          <Route path="/Sem12020" element={<CseSem12020 />} />
          <Route path="/CseBranch" element={<CseBranch />} />
          <Route path="/EceBranch" element={<EceBranch />} />
          <Route path="/MeBranch" element={<MeBranch />} />
          <Route path="/CeBranch" element={<CeBranch />} />
          <Route path="/EeBranch" element={<EeBranch />} />
          <Route path="/BeBranch" element={<BeBranch />} />
          <Route path="/Signout" element={<Signout />} />
          <Route path="/Signin" element={<Signin />} />
          {/* <Route path="/signup" element={<Signup />} /> */}

          <Route path="/user" element={<Navigate to="/" />} />
        </Routes>

        <div>
          <Footer />
        </div>
        <CookieConsent
          debug={true}
          buttonStyle={{ borderRadius: "5px" }}
          buttonText="GOT IT"
        >
          🍪We use cookies to ensure you get the best experience on our website.{" "}
          <Link to={"/privacy"} style={{ "text-decoration": "underline" }}>
            Cookies Policy
          </Link>
        </CookieConsent>
      </div>
    </>
  );
}

export default App;
