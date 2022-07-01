import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { auth } from "./MyComponents/Authintication/firebase";
import Signin from "./MyComponents/Authintication/components/Signin";
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
import Upload from "./MyComponents/Upload";
import Privacy from "./MyComponents/Privacy";
import Faq from "./MyComponents/Faq";
import Giveaway from "./MyComponents/Giveaway";
import Q1 from "./MyComponents/Q1";
import Q2 from "./MyComponents/Q2";
import Q3 from "./MyComponents/Q3";
import Q4 from "./MyComponents/Q4";
import Q5 from "./MyComponents/Q5";
import Q6 from "./MyComponents/Q6";
import Q7 from "./MyComponents/Q7";
import Q8 from "./MyComponents/Q8";
import Q9 from "./MyComponents/Q9";
import Q10 from "./MyComponents/Q10";
import Q11 from "./MyComponents/Q11";
import Q12 from "./MyComponents/Q12";
import Q13 from "./MyComponents/Q13";
import Question from "./MyComponents/Question";
import MDU from "./MyComponents/MDU";
import JCBU from "./MyComponents/JCBU";
import DCRU from "./MyComponents/DCRU";
import GJU from "./MyComponents/GJU";
import CDLU from "./MyComponents/CDLU";
import KU from "./MyComponents/KU";
import MDUN from "./MyComponents/MDUN";
import JCBUN from "./MyComponents/JCBUN";
import DCRUN from "./MyComponents/DCRUN";
import GJUN from "./MyComponents/GJUN";
import CDLUN from "./MyComponents/CDLUN";
import KUN from "./MyComponents/KUN";
import Footer from "./MyComponents/Footer";
import Event from "./MyComponents/Event";
import CseBranch from "./MyComponents/Branch/Cse/CseBranch";
import EceBranch from "./MyComponents/Branch/Ece/EceBranch";
import MeBranch from "./MyComponents/Branch/Me/MeBranch";
import CeBranch from "./MyComponents/Branch/Ce/CeBranch";
import EeBranch from "./MyComponents/Branch/Ee/EeBranch";
import BeBranch from "./MyComponents/Branch/Be/BeBranch";
import CseSem1 from "./MyComponents/Branch/Cse/CseSem1";
import CseSem2 from "./MyComponents/Branch/Cse/CseSem2";
import CseSem3 from "./MyComponents/Branch/Cse/CseSem3";
import CseSem4 from "./MyComponents/Branch/Cse/CseSem4";
import CseSem5 from "./MyComponents/Branch/Cse/CseSem5";
import CseSem6 from "./MyComponents/Branch/Cse/CseSem6";
import CseSem7 from "./MyComponents/Branch/Cse/CseSem7";
import CseSem8 from "./MyComponents/Branch/Cse/CseSem8";
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
          <Route path="/MDU" element={<MDU />} />
          <Route path="/JCBU" element={<JCBU />} />
          <Route path="/DCRU" element={<DCRU />} />
          <Route path="/GJU" element={<GJU />} />
          <Route path="/CDLU" element={<CDLU />} />
          <Route path="/KU" element={<KU />} />
          <Route path="/MDUN" element={<MDUN />} />
          <Route path="/JCBUN" element={<JCBUN />} />
          <Route path="/DCRUN" element={<DCRUN />} />
          <Route path="/GJUN" element={<GJUN />} />
          <Route path="/CDLUN" element={<CDLUN />} />
          <Route path="/KUN" element={<KUN />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Giveaway" element={<Giveaway />} />
          <Route path="/Q1" element={<Q1 />} />
          <Route path="/Q2" element={<Q2 />} />
          <Route path="/Q3" element={<Q3 />} />
          <Route path="/Q4" element={<Q4 />} />
          <Route path="/Q5" element={<Q5 />} />
          <Route path="/Q6" element={<Q6 />} />
          <Route path="/Q7" element={<Q7 />} />
          <Route path="/Q8" element={<Q8 />} />
          <Route path="/Q9" element={<Q9 />} />
          <Route path="/Q10" element={<Q10 />} />
          <Route path="/Q11" element={<Q11 />} />
          <Route path="/Q12" element={<Q12 />} />
          <Route path="/Q13" element={<Q13 />} />
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
          <Route path="/CseBranch" element={<CseBranch />} />
          <Route path="/EceBranch" element={<EceBranch />} />
          <Route path="/MeBranch" element={<MeBranch />} />
          <Route path="/CeBranch" element={<CeBranch />} />
          <Route path="/EeBranch" element={<EeBranch />} />
          <Route path="/BeBranch" element={<BeBranch />} />
          <Route path="/Signout" element={<Signout />} />
          <Route path="/Signout" element={<Signout User={user}/>} />
          <Route path="/Signin" element={<Signin />} />

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
