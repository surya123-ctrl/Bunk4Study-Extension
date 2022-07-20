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
import CseBranchMDU from "./MyComponents/Branch/MDU/CseMDU/CseBranchMDU";
import EceBranchMDU from "./MyComponents/Branch/MDU/EceMDU/EceBranchMDU";
import MeBranchMDU from "./MyComponents/Branch/MDU/MeMDU/MeBranchMDU";
import CeBranchMDU from "./MyComponents/Branch/MDU/CeMDU/CeBranchMDU";
import EeBranchMDU from "./MyComponents/Branch/MDU/EeMDU/EeBranchMDU";
import BeBranchMDU from "./MyComponents/Branch/MDU/BeMDU/BeBranchMDU";
import CseSem1MDU from "./MyComponents/Branch/MDU/CseMDU/CseSem1MDU";
import CseSem2MDU from "./MyComponents/Branch/MDU/CseMDU/CseSem2MDU";
import CseSem3MDU from "./MyComponents/Branch/MDU/CseMDU/CseSem3MDU";
import CseSem4MDU from "./MyComponents/Branch/MDU/CseMDU/CseSem4MDU";
import CseSem5MDU from "./MyComponents/Branch/MDU/CseMDU/CseSem5MDU";
import CseSem6MDU from "./MyComponents/Branch/MDU/CseMDU/CseSem6MDU";
import CseSem7MDU from "./MyComponents/Branch/MDU/CseMDU/CseSem7MDU";
import CseSem8MDU from "./MyComponents/Branch/MDU/CseMDU/CseSem8MDU";

import CseBranchCDLU from "./MyComponents/Branch/CDLU/CseCDLU/CseBranchCDLU";
import EceBranchCDLU from "./MyComponents/Branch/CDLU/EceCDLU/EceBranchCDLU";
import MeBranchCDLU from "./MyComponents/Branch/CDLU/MeCDLU/MeBranchCDLU";
import CeBranchCDLU from "./MyComponents/Branch/CDLU/CeCDLU/CeBranchCDLU";
import EeBranchCDLU from "./MyComponents/Branch/CDLU/EeCDLU/EeBranchCDLU";
import BeBranchCDLU from "./MyComponents/Branch/CDLU/BeCDLU/BeBranchCDLU";

import CseBranchDCRU from "./MyComponents/Branch/DCRU/CseDCRU/CseBranchDCRU";
import EceBranchDCRU from "./MyComponents/Branch/DCRU/EceDCRU/EceBranchDCRU";
import MeBranchDCRU from "./MyComponents/Branch/DCRU/MeDCRU/MeBranchDCRU";
import CeBranchDCRU from "./MyComponents/Branch/DCRU/CeDCRU/CeBranchDCRU";
import EeBranchDCRU from "./MyComponents/Branch/DCRU/EeDCRU/EeBranchDCRU";
import BeBranchDCRU from "./MyComponents/Branch/DCRU/BeDCRU/BeBranchDCRU";

import CseBranchGJU from "./MyComponents/Branch/GJU/CseGJU/CseBranchGJU";
import EceBranchGJU from "./MyComponents/Branch/GJU/EceGJU/EceBranchGJU";
import MeBranchGJU from "./MyComponents/Branch/GJU/MeGJU/MeBranchGJU";
import CeBranchGJU from "./MyComponents/Branch/GJU/CeGJU/CeBranchGJU";
import EeBranchGJU from "./MyComponents/Branch/GJU/EeGJU/EeBranchGJU";
import BeBranchGJU from "./MyComponents/Branch/GJU/BeGJU/BeBranchGJU";

import CseBranchJCBU from "./MyComponents/Branch/JCBU/CseJCBU/CseBranchJCBU";
import EceBranchJCBU from "./MyComponents/Branch/JCBU/EceJCBU/EceBranchJCBU";
import MeBranchJCBU from "./MyComponents/Branch/JCBU/MeJCBU/MeBranchJCBU";
import CeBranchJCBU from "./MyComponents/Branch/JCBU/CeJCBU/CeBranchJCBU";
import EeBranchJCBU from "./MyComponents/Branch/JCBU/EeJCBU/EeBranchJCBU";
import BeBranchJCBU from "./MyComponents/Branch/JCBU/BeJCBU/BeBranchJCBU";

import CseBranchKU from "./MyComponents/Branch/KU/CseKU/CseBranchKU";
import EceBranchKU from "./MyComponents/Branch/KU/EceKU/EceBranchKU";
import MeBranchKU from "./MyComponents/Branch/KU/MeKU/MeBranchKU";
import CeBranchKU from "./MyComponents/Branch/KU/CeKU/CeBranchKU";
import EeBranchKU from "./MyComponents/Branch/KU/EeKU/EeBranchKU";
import BeBranchKU from "./MyComponents/Branch/KU/BeKU/BeBranchKU";

import CseBranchMDUN from "./MyComponents/Notes/MDUN/CseMDUN/CseBranchMDUN";
import BeBranchMDUN from "./MyComponents/Notes/MDUN/BeMDUN/BeBranchMDUN";
import CeBranchMDUN from "./MyComponents/Notes/MDUN/CeMDUN/CeBranchMDUN";
import MeBranchMDUN from "./MyComponents/Notes/MDUN/MeMDUN/MeBranchMDUN";
import EceBranchMDUN from "./MyComponents/Notes/MDUN/EceMDUN/EceBranchMDUN";
import EeBranchMDUN from "./MyComponents/Notes/MDUN/EeMDUN/EeBranchMDUN";

import CseBranchCDLUN from "./MyComponents/Notes/CDLUN/CseCDLUN/CseBranchCDLUN";
import BeBranchCDLUN from "./MyComponents/Notes/CDLUN/BeCDLUN/BeBranchCDLUN";
import CeBranchCDLUN from "./MyComponents/Notes/CDLUN/CeCDLUN/CeBranchCDLUN";
import MeBranchCDLUN from "./MyComponents/Notes/CDLUN/MeCDLUN/MeBranchCDLUN";
import EceBranchCDLUN from "./MyComponents/Notes/CDLUN/EceCDLUN/EceBranchCDLUN";
import EeBranchCDLUN from "./MyComponents/Notes/CDLUN/EeCDLUN/EeBranchCDLUN";

import CseBranchDCRUN from "./MyComponents/Notes/DCRUN/CseDCRUN/CseBranchDCRUN";
import BeBranchDCRUN from "./MyComponents/Notes/DCRUN/BeDCRUN/BeBranchDCRUN";
import CeBranchDCRUN from "./MyComponents/Notes/DCRUN/CeDCRUN/CeBranchDCRUN";
import MeBranchDCRUN from "./MyComponents/Notes/DCRUN/MeDCRUN/MeBranchDCRUN";
import EceBranchDCRUN from "./MyComponents/Notes/DCRUN/EceDCRUN/EceBranchDCRUN";
import EeBranchDCRUN from "./MyComponents/Notes/DCRUN/EeDCRUN/EeBranchDCRUN";

import CseBranchGJUN from "./MyComponents/Notes/GJUN/CseGJUN/CseBranchGJUN";
import BeBranchGJUN from "./MyComponents/Notes/GJUN/BeGJUN/BeBranchGJUN";
import CeBranchGJUN from "./MyComponents/Notes/GJUN/CeGJUN/CeBranchGJUN";
import MeBranchGJUN from "./MyComponents/Notes/GJUN/MeGJUN/MeBranchGJUN";
import EceBranchGJUN from "./MyComponents/Notes/GJUN/EceGJUN/EceBranchGJUN";
import EeBranchGJUN from "./MyComponents/Notes/GJUN/EeGJUN/EeBranchGJUN";

import CseBranchJCBUN from "./MyComponents/Notes/JCBUN/CseJCBUN/CseBranchJCBUN";
import BeBranchJCBUN from "./MyComponents/Notes/JCBUN/BeJCBUN/BeBranchJCBUN";
import CeBranchJCBUN from "./MyComponents/Notes/JCBUN/CeJCBUN/CeBranchJCBUN";
import MeBranchJCBUN from "./MyComponents/Notes/JCBUN/MeJCBUN/MeBranchJCBUN";
import EceBranchJCBUN from "./MyComponents/Notes/JCBUN/EceJCBUN/EceBranchJCBUN";
import EeBranchJCBUN from "./MyComponents/Notes/JCBUN/EeJCBUN/EeBranchJCBUN";

import CseBranchKUN from "./MyComponents/Notes/KUN/CseKUN/CseBranchKUN";
import BeBranchKUN from "./MyComponents/Notes/KUN/BeKUN/BeBranchKUN";
import CeBranchKUN from "./MyComponents/Notes/KUN/CeKUN/CeBranchKUN";
import MeBranchKUN from "./MyComponents/Notes/KUN/MeKUN/MeBranchKUN";
import EceBranchKUN from "./MyComponents/Notes/KUN/EceKUN/EceBranchKUN";
import EeBranchKUN from "./MyComponents/Notes/KUN/EeKUN/EeBranchKUN";

import ScrollToTop from "./MyComponents/scrollToTop";
import { Routes, Route, Navigate } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import { Helmet } from "react-helmet";

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

        <Helmet>
          <title>Bunk4Study</title>
          <meta name="description"
            content="Get all the question papers of mdu,cdlu,dcru,gju,jcbu and other universities"
          />
          <meta name="keywords" content="bunk4study,college prepration,university exam,MDU question paper,JCBU question paper,DCRU question paper,Notes,papers of university" />
        </Helmet>

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

          <Route path="/CseBranchCDLU" element={<CseBranchCDLU />} />
          <Route path="/EceBranchCDLU" element={<EceBranchCDLU />} />
          <Route path="/MeBranchCDLU" element={<MeBranchCDLU />} />
          <Route path="/CeBranchCDLU" element={<CeBranchCDLU />} />
          <Route path="/EeBranchCDLU" element={<EeBranchCDLU />} />
          <Route path="/BeBranchCDLU" element={<BeBranchCDLU />} />

          <Route path="/CseBranchDCRU" element={<CseBranchDCRU />} />
          <Route path="/EceBranchDCRU" element={<EceBranchDCRU />} />
          <Route path="/MeBranchDCRU" element={<MeBranchDCRU />} />
          <Route path="/CeBranchDCRU" element={<CeBranchDCRU />} />
          <Route path="/EeBranchDCRU" element={<EeBranchDCRU />} />
          <Route path="/BeBranchDCRU" element={<BeBranchDCRU />} />

          <Route path="/CseBranchGJU" element={<CseBranchGJU />} />
          <Route path="/EceBranchGJU" element={<EceBranchGJU />} />
          <Route path="/MeBranchGJU" element={<MeBranchGJU />} />
          <Route path="/CeBranchGJU" element={<CeBranchGJU />} />
          <Route path="/EeBranchGJU" element={<EeBranchGJU />} />
          <Route path="/BeBranchGJU" element={<BeBranchGJU />} />

          <Route path="/CseBranchJCBU" element={<CseBranchJCBU />} />
          <Route path="/EceBranchJCBU" element={<EceBranchJCBU />} />
          <Route path="/MeBranchJCBU" element={<MeBranchJCBU />} />
          <Route path="/CeBranchJCBU" element={<CeBranchJCBU />} />
          <Route path="/EeBranchJCBU" element={<EeBranchJCBU />} />
          <Route path="/BeBranchJCBU" element={<BeBranchJCBU />} />

          <Route path="/CseBranchKU" element={<CseBranchKU />} />
          <Route path="/EceBranchKU" element={<EceBranchKU />} />
          <Route path="/MeBranchKU" element={<MeBranchKU />} />
          <Route path="/CeBranchKU" element={<CeBranchKU />} />
          <Route path="/EeBranchKU" element={<EeBranchKU />} />
          <Route path="/BeBranchKU" element={<BeBranchKU />} />

          <Route path="/CseBranchMDUN" element={<CseBranchMDUN />} />
          <Route path="/BeBranchMDUN" element={<BeBranchMDUN />} />
          <Route path="/CeBranchMDUN" element={<CeBranchMDUN />} />
          <Route path="/MeBranchMDUN" element={<MeBranchMDUN />} />
          <Route path="/EceBranchMDUN" element={<EceBranchMDUN />} />
          <Route path="/EeBranchMDUN" element={<EeBranchMDUN />} />

          <Route path="/CseBranchCDLUN" element={<CseBranchCDLUN />} />
          <Route path="/BeBranchCDLUN" element={<BeBranchCDLUN />} />
          <Route path="/CeBranchCDLUN" element={<CeBranchCDLUN />} />
          <Route path="/MeBranchCDLUN" element={<MeBranchCDLUN />} />
          <Route path="/EceBranchCDLUN" element={<EceBranchCDLUN />} />
          <Route path="/EeBranchCDLUN" element={<EeBranchCDLUN />} />

          <Route path="/CseBranchDCRUN" element={<CseBranchDCRUN />} />
          <Route path="/BeBranchDCRUN" element={<BeBranchDCRUN />} />
          <Route path="/CeBranchDCRUN" element={<CeBranchDCRUN />} />
          <Route path="/MeBranchDCRUN" element={<MeBranchDCRUN />} />
          <Route path="/EceBranchDCRUN" element={<EceBranchDCRUN />} />
          <Route path="/EeBranchDCRUN" element={<EeBranchDCRUN />} />

          <Route path="/CseBranchGJUN" element={<CseBranchGJUN />} />
          <Route path="/BeBranchGJUN" element={<BeBranchGJUN />} />
          <Route path="/CeBranchGJUN" element={<CeBranchGJUN />} />
          <Route path="/MeBranchGJUN" element={<MeBranchGJUN />} />
          <Route path="/EceBranchGJUN" element={<EceBranchGJUN />} />
          <Route path="/EeBranchGJUN" element={<EeBranchGJUN />} />

          <Route path="/CseBranchJCBUN" element={<CseBranchJCBUN />} />
          <Route path="/CeBranchJCBUN" element={<CeBranchJCBUN />} />
          <Route path="/MeBranchJCBUN" element={<MeBranchJCBUN />} />
          <Route path="/BeBranchJCBUN" element={<BeBranchJCBUN />} />
          <Route path="/EceBranchJCBUN" element={<EceBranchJCBUN />} />
          <Route path="/EeBranchJCBUN" element={<EeBranchJCBUN />} />

          <Route path="/CseBranchKUN" element={<CseBranchKUN />} />
          <Route path="/BeBranchKUN" element={<BeBranchKUN />} />
          <Route path="/CeBranchKUN" element={<CeBranchKUN />} />
          <Route path="/MeBranchKUN" element={<MeBranchKUN />} />
          <Route path="/EceBranchKUN" element={<EceBranchKUN />} />
          <Route path="/EeBranchKUN" element={<EeBranchKUN />} />


          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signout" element={<Signout User={user} />} />
          <Route path="/Signin" element={<Signin />} />

          <Route path="/user" element={<Navigate to="/" />} />
        </Routes>

        <div>
          <Footer />
        </div>
        {/* <CookieConsent
          debug={true}
          buttonStyle={{ borderRadius: "5px" }}
          buttonText="GOT IT"
        >
          🍪We use cookies to ensure you get the best experience on our website.{" "}
          <Link to={"/privacy"} style={{ "text-decoration": "underline" }}>
            Cookies Policy
          </Link>
        </CookieConsent> */}
      </div>
    </>
  );
}

export default App;
