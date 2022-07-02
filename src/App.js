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
import Giveaway from "./MyComponents/Giveaway/Giveaway";
import Q1 from "./MyComponents/Giveaway/Q1";
import Q2 from "./MyComponents/Giveaway/Q2";
import Q3 from "./MyComponents/Giveaway/Q3";
import Q4 from "./MyComponents/Giveaway/Q4";
import Q5 from "./MyComponents/Giveaway/Q5";
import Q6 from "./MyComponents/Giveaway/Q6";
import Q7 from "./MyComponents/Giveaway/Q7";
import Q8 from "./MyComponents/Giveaway/Q8";
import Q9 from "./MyComponents/Giveaway/Q9";
import Q10 from "./MyComponents/Giveaway/Q10";
import Q11 from "./MyComponents/Giveaway/Q11";
import Q12 from "./MyComponents/Giveaway/Q12";
import Q13 from "./MyComponents/Giveaway/Q13";
import Question from "./MyComponents/Question";
import MDU from "./MyComponents/College/MDU";
import JCBU from "./MyComponents/College/JCBU";
import DCRU from "./MyComponents/College/DCRU";
import GJU from "./MyComponents/College/GJU";
import CDLU from "./MyComponents/College/CDLU";
import KU from "./MyComponents/College/KU";
import MDUN from "./MyComponents/College/MDUN";
import JCBUN from "./MyComponents/College/JCBUN";
import DCRUN from "./MyComponents/College/DCRUN";
import GJUN from "./MyComponents/College/GJUN";
import CDLUN from "./MyComponents/College/CDLUN";
import KUN from "./MyComponents/College/KUN";
import Footer from "./MyComponents/Footer";
import Event from "./MyComponents/Event";
import CseBranchMDU from "./MyComponents/Branch/Cse-MDU/CseBranch-MDU";
import EceBranchMDU from "./MyComponents/Branch/Ece-MDU/EceBranch-MDU";
import MeBranchMDU from "./MyComponents/Branch/Me-MDU/MeBranch-MDU";
import CeBranchMDU from "./MyComponents/Branch/Ce-MDU/CeBranch-MDU";
import EeBranchMDU from "./MyComponents/Branch/Ee-MDU/EeBranch-MDU";
import BeBranchMDU from "./MyComponents/Branch/Be-MDU/BeBranch-MDU";
import CseSem1MDU from "./MyComponents/Branch/Cse-MDU/CseSem1-MDU";
import CseSem2MDU from "./MyComponents/Branch/Cse-MDU/CseSem2-MDU";
import CseSem3MDU from "./MyComponents/Branch/Cse-MDU/CseSem3-MDU";
import CseSem4MDU from "./MyComponents/Branch/Cse-MDU/CseSem4-MDU";
import CseSem5MDU from "./MyComponents/Branch/Cse-MDU/CseSem5-MDU";
import CseSem6MDU from "./MyComponents/Branch/Cse-MDU/CseSem6-MDU";
import CseSem7MDU from "./MyComponents/Branch/Cse-MDU/CseSem7-MDU";
import CseSem8MDU from "./MyComponents/Branch/Cse-MDU/CseSem8-MDU";
import ScrollToTop from "./MyComponents/scrollToTop";
import { Routes, Route, Navigate } from "react-router-dom";
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
          <Route path="/CseSem1MDU" element={<CseSem1MDU />} />
          <Route path="/CseSem2MDU" element={<CseSem2MDU />} />
          <Route path="/CseSem3MDU" element={<CseSem3MDU />} />
          <Route path="/CseSem4MDU" element={<CseSem4MDU />} />
          <Route path="/CseSem5MDU" element={<CseSem5MDU />} />
          <Route path="/CseSem6MDU" element={<CseSem6MDU />} />
          <Route path="/CseSem7MDU" element={<CseSem7MDU />} />
          <Route path="/CseSem8MDU" element={<CseSem8MDU />} />
          <Route path="/CseBranchMDU" element={<CseBranchMDU />} />
          <Route path="/EceBranchMDU" element={<EceBranchMDU />} />
          <Route path="/MeBranchMDU" element={<MeBranchMDU />} />
          <Route path="/CeBranchMDU" element={<CeBranchMDU />} />
          <Route path="/EeBranchMDU" element={<EeBranchMDU />} />
          <Route path="/BeBranchMDU" element={<BeBranchMDU />} />
          <Route path="/Signup" element={<Signup />} />
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
