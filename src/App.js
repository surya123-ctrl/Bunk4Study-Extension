// import { Link } from "react-router-dom";
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
import CseBranchMDU from "./MyComponents/Branch/MDU/Cse-MDU/CseBranch-MDU";
import EceBranchMDU from "./MyComponents/Branch/MDU/Ece-MDU/EceBranch-MDU";
import MeBranchMDU from "./MyComponents/Branch/MDU/Me-MDU/MeBranch-MDU";
import CeBranchMDU from "./MyComponents/Branch/MDU/Ce-MDU/CeBranch-MDU";
import EeBranchMDU from "./MyComponents/Branch/MDU/Ee-MDU/EeBranch-MDU";
import BeBranchMDU from "./MyComponents/Branch/MDU/Be-MDU/BeBranch-MDU";


import CseBranchCDLU from "./MyComponents/Branch/CDLU/Cse-CDLU/CseBranch-CDLU";
import EceBranchCDLU from "./MyComponents/Branch/CDLU/Ece-CDLU/EceBranch-CDLU";
import MeBranchCDLU from "./MyComponents/Branch/CDLU/Me-CDLU/MeBranch-CDLU";
import CeBranchCDLU from "./MyComponents/Branch/CDLU/Ce-CDLU/CeBranch-CDLU";
import EeBranchCDLU from "./MyComponents/Branch/CDLU/Ee-CDLU/EeBranch-CDLU";
import BeBranchCDLU from "./MyComponents/Branch/CDLU/Be-CDLU/BeBranch-CDLU";

import CseBranchDCRU from "./MyComponents/Branch/DCRU/Cse-DCRU/CseBranch-DCRU";
import EceBranchDCRU from "./MyComponents/Branch/DCRU/Ece-DCRU/EceBranch-DCRU";
import MeBranchDCRU from "./MyComponents/Branch/DCRU/Me-DCRU/MeBranch-DCRU";
import CeBranchDCRU from "./MyComponents/Branch/DCRU/Ce-DCRU/CeBranch-DCRU";
import EeBranchDCRU from "./MyComponents/Branch/DCRU/Ee-DCRU/EeBranch-DCRU";
import BeBranchDCRU from "./MyComponents/Branch/DCRU/Be-DCRU/BeBranch-DCRU";

import CseBranchGJU from "./MyComponents/Branch/GJU/Cse-GJU/CseBranch-GJU";
import EceBranchGJU from "./MyComponents/Branch/GJU/Ece-GJU/EceBranch-GJU";
import MeBranchGJU from "./MyComponents/Branch/GJU/Me-GJU/MeBranch-GJU";
import CeBranchGJU from "./MyComponents/Branch/GJU/Ce-GJU/CeBranch-GJU";
import EeBranchGJU from "./MyComponents/Branch/GJU/Ee-GJU/EeBranch-GJU";
import BeBranchGJU from "./MyComponents/Branch/GJU/Be-GJU/BeBranch-GJU";

import CseBranchJCBU from "./MyComponents/Branch/JCBU/Cse-JCBU/CseBranch-JCBU";
import EceBranchJCBU from "./MyComponents/Branch/JCBU/Ece-JCBU/EceBranch-JCBU";
import MeBranchJCBU from "./MyComponents/Branch/JCBU/Me-JCBU/MeBranch-JCBU";
import CeBranchJCBU from "./MyComponents/Branch/JCBU/Ce-JCBU/CeBranch-JCBU";
import EeBranchJCBU from "./MyComponents/Branch/JCBU/Ee-JCBU/EeBranch-JCBU";
import BeBranchJCBU from "./MyComponents/Branch/JCBU/Be-JCBU/BeBranch-JCBU";

import CseBranchKU from "./MyComponents/Branch/KU/Cse-KU/CseBranch-KU";
import EceBranchKU from "./MyComponents/Branch/KU/Ece-KU/EceBranch-KU";
import MeBranchKU from "./MyComponents/Branch/KU/Me-KU/MeBranch-KU";
import CeBranchKU from "./MyComponents/Branch/KU/Ce-KU/CeBranch-KU";
import EeBranchKU from "./MyComponents/Branch/KU/Ee-KU/EeBranch-KU";
import BeBranchKU from "./MyComponents/Branch/KU/Be-KU/BeBranch-KU";

import CseBranchMDUN from "./MyComponents/Notes/MDUN/Cse-MDUN/CseBranch-MDUN";
import BeBranchMDUN from "./MyComponents/Notes/MDUN/Be-MDUN/BeBranch-MDUN";
import CeBranchMDUN from "./MyComponents/Notes/MDUN/Ce-MDUN/CeBranch-MDUN";
import MeBranchMDUN from "./MyComponents/Notes/MDUN/Me-MDUN/MeBranch-MDUN";
import EceBranchMDUN from "./MyComponents/Notes/MDUN/Ece-MDUN/EceBranch-MDUN";
import EeBranchMDUN from "./MyComponents/Notes/MDUN/Ee-MDUN/EeBranch-MDUN";

import CseBranchCDLUN from "./MyComponents/Notes/CDLUN/Cse-CDLUN/CseBranch-CDLUN";
import BeBranchCDLUN from "./MyComponents/Notes/CDLUN/Be-CDLUN/BeBranch-CDLUN";
import CeBranchCDLUN from "./MyComponents/Notes/CDLUN/Ce-CDLUN/CeBranch-CDLUN";
import MeBranchCDLUN from "./MyComponents/Notes/CDLUN/Me-CDLUN/MeBranch-CDLUN";
import EceBranchCDLUN from "./MyComponents/Notes/CDLUN/Ece-CDLUN/EceBranch-CDLUN";
import EeBranchCDLUN from "./MyComponents/Notes/CDLUN/Ee-CDLUN/EeBranch-CDLUN";

import CseBranchDCRUN from "./MyComponents/Notes/DCRUN/Cse-DCRUN/CseBranch-DCRUN";
import BeBranchDCRUN from "./MyComponents/Notes/DCRUN/Be-DCRUN/BeBranch-DCRUN";
import CeBranchDCRUN from "./MyComponents/Notes/DCRUN/Ce-DCRUN/CeBranch-DCRUN";
import MeBranchDCRUN from "./MyComponents/Notes/DCRUN/Me-DCRUN/MeBranch-DCRUN";
import EceBranchDCRUN from "./MyComponents/Notes/DCRUN/Ece-DCRUN/EceBranch-DCRUN";
import EeBranchDCRUN from "./MyComponents/Notes/DCRUN/Ee-DCRUN/EeBranch-DCRUN";

import CseBranchGJUN from "./MyComponents/Notes/GJUN/Cse-GJUN/CseBranch-GJUN";
import BeBranchGJUN from "./MyComponents/Notes/GJUN/Be-GJUN/BeBranch-GJUN";
import CeBranchGJUN from "./MyComponents/Notes/GJUN/Ce-GJUN/CeBranch-GJUN";
import MeBranchGJUN from "./MyComponents/Notes/GJUN/Me-GJUN/MeBranch-GJUN";
import EceBranchGJUN from "./MyComponents/Notes/GJUN/Ece-GJUN/EceBranch-GJUN";
import EeBranchGJUN from "./MyComponents/Notes/GJUN/Ee-GJUN/EeBranch-GJUN";

import CseBranchJCBUN from "./MyComponents/Notes/JCBUN/Cse-JCBUN/CseBranch-JCBUN";
import BeBranchJCBUN from "./MyComponents/Notes/JCBUN/Be-JCBUN/BeBranch-JCBUN";
import CeBranchJCBUN from "./MyComponents/Notes/JCBUN/Ce-JCBUN/CeBranch-JCBUN";
import MeBranchJCBUN from "./MyComponents/Notes/JCBUN/Me-JCBUN/MeBranch-JCBUN";
import EceBranchJCBUN from "./MyComponents/Notes/JCBUN/Ece-JCBUN/EceBranch-JCBUN";
import EeBranchJCBUN from "./MyComponents/Notes/JCBUN/Ee-JCBUN/EeBranch-JCBUN";

import CseBranchKUN from "./MyComponents/Notes/KUN/Cse-KUN/CseBranch-KUN";
import BeBranchKUN from "./MyComponents/Notes/KUN/Be-KUN/BeBranch-KUN";
import CeBranchKUN from "./MyComponents/Notes/KUN/Ce-KUN/CeBranch-KUN";
import MeBranchKUN from "./MyComponents/Notes/KUN/Me-KUN/MeBranch-KUN";
import EceBranchKUN from "./MyComponents/Notes/KUN/Ece-KUN/EceBranch-KUN";
import EeBranchKUN from "./MyComponents/Notes/KUN/Ee-KUN/EeBranch-KUN";

import CseSem1MDU from "./MyComponents/Branch/MDU/Cse-MDU/CseSem1-MDU";
import CseSem2MDU from "./MyComponents/Branch/MDU/Cse-MDU/CseSem2-MDU";
import CseSem3MDU from "./MyComponents/Branch/MDU/Cse-MDU/CseSem3-MDU";
import CseSem4MDU from "./MyComponents/Branch/MDU/Cse-MDU/CseSem4-MDU";
import CseSem5MDU from "./MyComponents/Branch/MDU/Cse-MDU/CseSem5-MDU";
import CseSem6MDU from "./MyComponents/Branch/MDU/Cse-MDU/CseSem6-MDU";
import CseSem7MDU from "./MyComponents/Branch/MDU/Cse-MDU/CseSem7-MDU";
import CseSem8MDU from "./MyComponents/Branch/MDU/Cse-MDU/CseSem8-MDU";

import MeSem1MDU from "./MyComponents/Branch/MDU/Me-MDU/MeSem1-MDU";
import MeSem2MDU from "./MyComponents/Branch/MDU/Me-MDU/MeSem2-MDU";
import MeSem3MDU from "./MyComponents/Branch/MDU/Me-MDU/MeSem3-MDU";
import MeSem4MDU from "./MyComponents/Branch/MDU/Me-MDU/MeSem4-MDU";
import MeSem5MDU from "./MyComponents/Branch/MDU/Me-MDU/MeSem5-MDU";
import MeSem6MDU from "./MyComponents/Branch/MDU/Me-MDU/MeSem6-MDU";
import MeSem7MDU from "./MyComponents/Branch/MDU/Me-MDU/MeSem7-MDU";
import MeSem8MDU from "./MyComponents/Branch/MDU/Me-MDU/MeSem8-MDU";

import EceSem1MDU from "./MyComponents/Branch/MDU/Ece-MDU/EceSem1-MDU";
import EceSem2MDU from "./MyComponents/Branch/MDU/Ece-MDU/EceSem2-MDU";
import EceSem3MDU from "./MyComponents/Branch/MDU/Ece-MDU/EceSem3-MDU";
import EceSem4MDU from "./MyComponents/Branch/MDU/Ece-MDU/EceSem4-MDU";
import EceSem5MDU from "./MyComponents/Branch/MDU/Ece-MDU/EceSem5-MDU";
import EceSem6MDU from "./MyComponents/Branch/MDU/Ece-MDU/EceSem6-MDU";
import EceSem7MDU from "./MyComponents/Branch/MDU/Ece-MDU/EceSem7-MDU";
import EceSem8MDU from "./MyComponents/Branch/MDU/Ece-MDU/EceSem8-MDU";

import CeSem1MDU from "./MyComponents/Branch/MDU/Ce-MDU/CeSem1-MDU";
import CeSem2MDU from "./MyComponents/Branch/MDU/Ce-MDU/CeSem2-MDU";
import CeSem3MDU from "./MyComponents/Branch/MDU/Ce-MDU/CeSem3-MDU";
import CeSem4MDU from "./MyComponents/Branch/MDU/Ce-MDU/CeSem4-MDU";
import CeSem5MDU from "./MyComponents/Branch/MDU/Ce-MDU/CeSem5-MDU";
import CeSem6MDU from "./MyComponents/Branch/MDU/Ce-MDU/CeSem6-MDU";
import CeSem7MDU from "./MyComponents/Branch/MDU/Ce-MDU/CeSem7-MDU";
import CeSem8MDU from "./MyComponents/Branch/MDU/Ce-MDU/CeSem8-MDU";

import BeSem1MDU from "./MyComponents/Branch/MDU/Be-MDU/BeSem1-MDU";
import BeSem2MDU from "./MyComponents/Branch/MDU/Be-MDU/BeSem2-MDU";
import BeSem3MDU from "./MyComponents/Branch/MDU/Be-MDU/BeSem3-MDU";
import BeSem4MDU from "./MyComponents/Branch/MDU/Be-MDU/BeSem4-MDU";
import BeSem5MDU from "./MyComponents/Branch/MDU/Be-MDU/BeSem5-MDU";
import BeSem6MDU from "./MyComponents/Branch/MDU/Be-MDU/BeSem6-MDU";
import BeSem7MDU from "./MyComponents/Branch/MDU/Be-MDU/BeSem7-MDU";
import BeSem8MDU from "./MyComponents/Branch/MDU/Be-MDU/BeSem8-MDU";

import EeSem1MDU from "./MyComponents/Branch/MDU/Ee-MDU/EeSem1-MDU";
import EeSem2MDU from "./MyComponents/Branch/MDU/Ee-MDU/EeSem2-MDU";
import EeSem3MDU from "./MyComponents/Branch/MDU/Ee-MDU/EeSem3-MDU";
import EeSem4MDU from "./MyComponents/Branch/MDU/Ee-MDU/EeSem4-MDU";
import EeSem5MDU from "./MyComponents/Branch/MDU/Ee-MDU/EeSem5-MDU";
import EeSem6MDU from "./MyComponents/Branch/MDU/Ee-MDU/EeSem6-MDU";
import EeSem7MDU from "./MyComponents/Branch/MDU/Ee-MDU/EeSem7-MDU";
import EeSem8MDU from "./MyComponents/Branch/MDU/Ee-MDU/EeSem8-MDU";

import BeSem1CDLU from "./MyComponents/Branch/CDLU/Be-CDLU/BeSem1-CDLU";
import BeSem2CDLU from "./MyComponents/Branch/CDLU/Be-CDLU/BeSem2-CDLU";
import BeSem3CDLU from "./MyComponents/Branch/CDLU/Be-CDLU/BeSem3-CDLU";
import BeSem4CDLU from "./MyComponents/Branch/CDLU/Be-CDLU/BeSem4-CDLU";
import BeSem5CDLU from "./MyComponents/Branch/CDLU/Be-CDLU/BeSem5-CDLU";
import BeSem6CDLU from "./MyComponents/Branch/CDLU/Be-CDLU/BeSem6-CDLU";
import BeSem7CDLU from "./MyComponents/Branch/CDLU/Be-CDLU/BeSem7-CDLU";
import BeSem8CDLU from "./MyComponents/Branch/CDLU/Be-CDLU/BeSem8-CDLU";

import CeSem1CDLU from "./MyComponents/Branch/CDLU/Ce-CDLU/CeSem1-CDLU";
import CeSem2CDLU from "./MyComponents/Branch/CDLU/Ce-CDLU/CeSem2-CDLU";
import CeSem3CDLU from "./MyComponents/Branch/CDLU/Ce-CDLU/CeSem3-CDLU";
import CeSem4CDLU from "./MyComponents/Branch/CDLU/Ce-CDLU/CeSem4-CDLU";
import CeSem5CDLU from "./MyComponents/Branch/CDLU/Ce-CDLU/CeSem5-CDLU";
import CeSem6CDLU from "./MyComponents/Branch/CDLU/Ce-CDLU/CeSem6-CDLU";
import CeSem7CDLU from "./MyComponents/Branch/CDLU/Ce-CDLU/CeSem7-CDLU";
import CeSem8CDLU from "./MyComponents/Branch/CDLU/Ce-CDLU/CeSem8-CDLU";

import CseSem1CDLU from "./MyComponents/Branch/CDLU/Cse-CDLU/CseSem1-CDLU";
import CseSem2CDLU from "./MyComponents/Branch/CDLU/Cse-CDLU/CseSem2-CDLU";
import CseSem3CDLU from "./MyComponents/Branch/CDLU/Cse-CDLU/CseSem3-CDLU";
import CseSem4CDLU from "./MyComponents/Branch/CDLU/Cse-CDLU/CseSem4-CDLU";
import CseSem5CDLU from "./MyComponents/Branch/CDLU/Cse-CDLU/CseSem5-CDLU";
import CseSem6CDLU from "./MyComponents/Branch/CDLU/Cse-CDLU/CseSem6-CDLU";
import CseSem7CDLU from "./MyComponents/Branch/CDLU/Cse-CDLU/CseSem7-CDLU";
import CseSem8CDLU from "./MyComponents/Branch/CDLU/Cse-CDLU/CseSem8-CDLU";

import EceSem1CDLU from "./MyComponents/Branch/CDLU/Ece-CDLU/EceSem1-CDLU";
import EceSem2CDLU from "./MyComponents/Branch/CDLU/Ece-CDLU/EceSem2-CDLU";
import EceSem3CDLU from "./MyComponents/Branch/CDLU/Ece-CDLU/EceSem3-CDLU";
import EceSem4CDLU from "./MyComponents/Branch/CDLU/Ece-CDLU/EceSem4-CDLU";
import EceSem5CDLU from "./MyComponents/Branch/CDLU/Ece-CDLU/EceSem5-CDLU";
import EceSem6CDLU from "./MyComponents/Branch/CDLU/Ece-CDLU/EceSem6-CDLU";
import EceSem7CDLU from "./MyComponents/Branch/CDLU/Ece-CDLU/EceSem7-CDLU";
import EceSem8CDLU from "./MyComponents/Branch/CDLU/Ece-CDLU/EceSem8-CDLU";

import EeSem1CDLU from "./MyComponents/Branch/CDLU/Ee-CDLU/EeSem1-CDLU";
import EeSem2CDLU from "./MyComponents/Branch/CDLU/Ee-CDLU/EeSem2-CDLU";
import EeSem3CDLU from "./MyComponents/Branch/CDLU/Ee-CDLU/EeSem3-CDLU";
import EeSem4CDLU from "./MyComponents/Branch/CDLU/Ee-CDLU/EeSem4-CDLU";
import EeSem5CDLU from "./MyComponents/Branch/CDLU/Ee-CDLU/EeSem5-CDLU";
import EeSem6CDLU from "./MyComponents/Branch/CDLU/Ee-CDLU/EeSem6-CDLU";
import EeSem7CDLU from "./MyComponents/Branch/CDLU/Ee-CDLU/EeSem7-CDLU";
import EeSem8CDLU from "./MyComponents/Branch/CDLU/Ee-CDLU/EeSem8-CDLU";

import MeSem1CDLU from "./MyComponents/Branch/CDLU/Me-CDLU/MeSem1-CDLU";
import MeSem2CDLU from "./MyComponents/Branch/CDLU/Me-CDLU/MeSem2-CDLU";
import MeSem3CDLU from "./MyComponents/Branch/CDLU/Me-CDLU/MeSem3-CDLU";
import MeSem4CDLU from "./MyComponents/Branch/CDLU/Me-CDLU/MeSem4-CDLU";
import MeSem5CDLU from "./MyComponents/Branch/CDLU/Me-CDLU/MeSem5-CDLU";
import MeSem6CDLU from "./MyComponents/Branch/CDLU/Me-CDLU/MeSem6-CDLU";
import MeSem7CDLU from "./MyComponents/Branch/CDLU/Me-CDLU/MeSem7-CDLU";
import MeSem8CDLU from "./MyComponents/Branch/CDLU/Me-CDLU/MeSem8-CDLU";

import ScrollToTop from "./MyComponents/scrollToTop";
import { Routes, Route, Navigate } from "react-router-dom";
// import CookieConsent from "react-cookie-consent";

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

          <Route path="/MeSem1MDU" element={<MeSem1MDU />} />
          <Route path="/MeSem2MDU" element={<MeSem2MDU />} />
          <Route path="/MeSem3MDU" element={<MeSem3MDU />} />
          <Route path="/MeSem4MDU" element={<MeSem4MDU />} />
          <Route path="/MeSem5MDU" element={<MeSem5MDU />} />
          <Route path="/MeSem6MDU" element={<MeSem6MDU />} />
          <Route path="/MeSem7MDU" element={<MeSem7MDU />} />
          <Route path="/MeSem8MDU" element={<MeSem8MDU />} />

          <Route path="/EceSem1MDU" element={<EceSem1MDU />} />
          <Route path="/EceSem2MDU" element={<EceSem2MDU />} />
          <Route path="/EceSem3MDU" element={<EceSem3MDU />} />
          <Route path="/EceSem4MDU" element={<EceSem4MDU />} />
          <Route path="/EceSem5MDU" element={<EceSem5MDU />} />
          <Route path="/EceSem6MDU" element={<EceSem6MDU />} />
          <Route path="/EceSem7MDU" element={<EceSem7MDU />} />
          <Route path="/EceSem8MDU" element={<EceSem8MDU />} />

          <Route path="/CeSem1MDU" element={<CeSem1MDU />} />
          <Route path="/CeSem2MDU" element={<CeSem2MDU />} />
          <Route path="/CeSem3MDU" element={<CeSem3MDU />} />
          <Route path="/CeSem4MDU" element={<CeSem4MDU />} />
          <Route path="/CeSem5MDU" element={<CeSem5MDU />} />
          <Route path="/CeSem6MDU" element={<CeSem6MDU />} />
          <Route path="/CeSem7MDU" element={<CeSem7MDU />} />
          <Route path="/CeSem8MDU" element={<CeSem8MDU />} />

          <Route path="/BeSem1MDU" element={<BeSem1MDU />} />
          <Route path="/BeSem2MDU" element={<BeSem2MDU />} />
          <Route path="/BeSem3MDU" element={<BeSem3MDU />} />
          <Route path="/BeSem4MDU" element={<BeSem4MDU />} />
          <Route path="/BeSem5MDU" element={<BeSem5MDU />} />
          <Route path="/BeSem6MDU" element={<BeSem6MDU />} />
          <Route path="/BeSem7MDU" element={<BeSem7MDU />} />
          <Route path="/BeSem8MDU" element={<BeSem8MDU />} />

          <Route path="/EeSem1MDU" element={<EeSem1MDU />} />
          <Route path="/EeSem2MDU" element={<EeSem2MDU />} />
          <Route path="/EeSem3MDU" element={<EeSem3MDU />} />
          <Route path="/EeSem4MDU" element={<EeSem4MDU />} />
          <Route path="/EeSem5MDU" element={<EeSem5MDU />} />
          <Route path="/EeSem6MDU" element={<EeSem6MDU />} />
          <Route path="/EeSem7MDU" element={<EeSem7MDU />} />
          <Route path="/EeSem8MDU" element={<EeSem8MDU />} />

          <Route path="/BeSem1CDLU" element={<BeSem1CDLU />} />
          <Route path="/BeSem2CDLU" element={<BeSem2CDLU />} />
          <Route path="/BeSem3CDLU" element={<BeSem3CDLU />} />
          <Route path="/BeSem4CDLU" element={<BeSem4CDLU />} />
          <Route path="/BeSem5CDLU" element={<BeSem5CDLU />} />
          <Route path="/BeSem6CDLU" element={<BeSem6CDLU />} />
          <Route path="/BeSem7CDLU" element={<BeSem7CDLU />} />
          <Route path="/BeSem8CDLU" element={<BeSem8CDLU />} />

          <Route path="/BeSem1CDLU" element={<BeSem1CDLU />} />
          <Route path="/BeSem2CDLU" element={<BeSem2CDLU />} />
          <Route path="/BeSem3CDLU" element={<BeSem3CDLU />} />
          <Route path="/BeSem4CDLU" element={<BeSem4CDLU />} />
          <Route path="/BeSem5CDLU" element={<BeSem5CDLU />} />
          <Route path="/BeSem6CDLU" element={<BeSem6CDLU />} />
          <Route path="/BeSem7CDLU" element={<BeSem7CDLU />} />
          <Route path="/BeSem8CDLU" element={<BeSem8CDLU />} />

          <Route path="/CeSem1CDLU" element={<CeSem1CDLU />} />
          <Route path="/CeSem2CDLU" element={<CeSem2CDLU />} />
          <Route path="/CeSem3CDLU" element={<CeSem3CDLU />} />
          <Route path="/CeSem4CDLU" element={<CeSem4CDLU />} />
          <Route path="/CeSem5CDLU" element={<CeSem5CDLU />} />
          <Route path="/CeSem6CDLU" element={<CeSem6CDLU />} />
          <Route path="/CeSem7CDLU" element={<CeSem7CDLU />} />
          <Route path="/CeSem8CDLU" element={<CeSem8CDLU />} />

          <Route path="/CseSem1CDLU" element={<CseSem1CDLU />} />
          <Route path="/CseSem2CDLU" element={<CseSem2CDLU />} />
          <Route path="/CseSem3CDLU" element={<CseSem3CDLU />} />
          <Route path="/CseSem4CDLU" element={<CseSem4CDLU />} />
          <Route path="/CseSem5CDLU" element={<CseSem5CDLU />} />
          <Route path="/CseSem6CDLU" element={<CseSem6CDLU />} />
          <Route path="/CseSem7CDLU" element={<CseSem7CDLU />} />
          <Route path="/CseSem8CDLU" element={<CseSem8CDLU />} />

          <Route path="/EceSem1CDLU" element={<EceSem1CDLU />} />
          <Route path="/EceSem2CDLU" element={<EceSem2CDLU />} />
          <Route path="/EceSem3CDLU" element={<EceSem3CDLU />} />
          <Route path="/EceSem4CDLU" element={<EceSem4CDLU />} />
          <Route path="/EceSem5CDLU" element={<EceSem5CDLU />} />
          <Route path="/EceSem6CDLU" element={<EceSem6CDLU />} />
          <Route path="/EceSem7CDLU" element={<EceSem7CDLU />} />
          <Route path="/EceSem8CDLU" element={<EceSem8CDLU />} />

          <Route path="/EeSem1CDLU" element={<EeSem1CDLU />} />
          <Route path="/EeSem2CDLU" element={<EeSem2CDLU />} />
          <Route path="/EeSem3CDLU" element={<EeSem3CDLU />} />
          <Route path="/EeSem4CDLU" element={<EeSem4CDLU />} />
          <Route path="/EeSem5CDLU" element={<EeSem5CDLU />} />
          <Route path="/EeSem6CDLU" element={<EeSem6CDLU />} />
          <Route path="/EeSem7CDLU" element={<EeSem7CDLU />} />
          <Route path="/EeSem8CDLU" element={<EeSem8CDLU />} />

          <Route path="/MeSem1CDLU" element={<MeSem1CDLU />} />
          <Route path="/MeSem2CDLU" element={<MeSem2CDLU />} />
          <Route path="/MeSem3CDLU" element={<MeSem3CDLU />} />
          <Route path="/MeSem4CDLU" element={<MeSem4CDLU />} />
          <Route path="/MeSem5CDLU" element={<MeSem5CDLU />} />
          <Route path="/MeSem6CDLU" element={<MeSem6CDLU />} />
          <Route path="/MeSem7CDLU" element={<MeSem7CDLU />} />
          <Route path="/MeSem8CDLU" element={<MeSem8CDLU />} />

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
          
          <Route path="/CseBranchMDUN" element={<CseBranchMDUN/>}/>
          <Route path="/BeBranchMDUN" element={<BeBranchMDUN/>}/>
          <Route path="/CeBranchMDUN" element={<CeBranchMDUN/>}/>
          <Route path="/MeBranchMDUN" element={<MeBranchMDUN/>}/>
          <Route path="/EceBranchMDUN" element={<EceBranchMDUN/>}/>
          <Route path="/EeBranchMDUN" element={<EeBranchMDUN/>}/>

          <Route path="/CseBranchCDLUN" element={<CseBranchCDLUN/>}/>
          <Route path="/BeBranchCDLUN" element={<BeBranchCDLUN/>}/>
          <Route path="/CeBranchCDLUN" element={<CeBranchCDLUN/>}/>
          <Route path="/MeBranchCDLUN" element={<MeBranchCDLUN/>}/>
          <Route path="/EceBranchCDLUN" element={<EceBranchCDLUN/>}/>
          <Route path="/EeBranchCDLUN" element={<EeBranchCDLUN/>}/>

          <Route path="/CseBranchDCRUN" element={<CseBranchDCRUN/>}/>
          <Route path="/BeBranchDCRUN" element={<BeBranchDCRUN/>}/>
          <Route path="/CeBranchDCRUN" element={<CeBranchDCRUN/>}/>
          <Route path="/MeBranchDCRUN" element={<MeBranchDCRUN/>}/>
          <Route path="/EceBranchDCRUN" element={<EceBranchDCRUN/>}/>
          <Route path="/EeBranchDCRUN" element={<EeBranchDCRUN/>}/>

          <Route path="/CseBranchGJUN" element={<CseBranchGJUN/>}/>
          <Route path="/BeBranchGJUN" element={<BeBranchGJUN/>}/>
          <Route path="/CeBranchGJUN" element={<CeBranchGJUN/>}/>
          <Route path="/MeBranchGJUN" element={<MeBranchGJUN/>}/>
          <Route path="/EceBranchGJUN" element={<EceBranchGJUN/>}/>
          <Route path="/EeBranchGJUN" element={<EeBranchGJUN/>}/>

          <Route path="/CseBranchJCBUN" element={<CseBranchJCBUN/>}/>
          <Route path="/CeBranchJCBUN" element={<CeBranchJCBUN/>}/>
          <Route path="/MeBranchJCBUN" element={<MeBranchJCBUN/>}/>
          <Route path="/BeBranchJCBUN" element={<BeBranchJCBUN/>}/>
          <Route path="/EceBranchJCBUN" element={<EceBranchJCBUN/>}/>
          <Route path="/EeBranchJCBUN" element={<EeBranchJCBUN/>}/>

          <Route path="/CseBranchKUN" element={<CseBranchKUN/>}/>
          <Route path="/BeBranchKUN" element={<BeBranchKUN/>}/>
          <Route path="/CeBranchKUN" element={<CeBranchKUN/>}/>
          <Route path="/MeBranchKUN" element={<MeBranchKUN/>}/>
          <Route path="/EceBranchKUN" element={<EceBranchKUN/>}/>
          <Route path="/EeBranchKUN" element={<EeBranchKUN/>}/>


          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signout" element={<Signout User={user}/>} />
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
