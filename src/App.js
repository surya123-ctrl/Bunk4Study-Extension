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

import BeSem1DCRU from "./MyComponents/Branch/DCRU/Be-DCRU/BeSem1-DCRU";
import BeSem2DCRU from "./MyComponents/Branch/DCRU/Be-DCRU/BeSem2-DCRU";
import BeSem3DCRU from "./MyComponents/Branch/DCRU/Be-DCRU/BeSem3-DCRU";
import BeSem4DCRU from "./MyComponents/Branch/DCRU/Be-DCRU/BeSem4-DCRU";
import BeSem5DCRU from "./MyComponents/Branch/DCRU/Be-DCRU/BeSem5-DCRU";
import BeSem6DCRU from "./MyComponents/Branch/DCRU/Be-DCRU/BeSem6-DCRU";
import BeSem7DCRU from "./MyComponents/Branch/DCRU/Be-DCRU/BeSem7-DCRU";
import BeSem8DCRU from "./MyComponents/Branch/DCRU/Be-DCRU/BeSem8-DCRU";

import CeSem1DCRU from "./MyComponents/Branch/DCRU/Ce-DCRU/CeSem1-DCRU";
import CeSem2DCRU from "./MyComponents/Branch/DCRU/Ce-DCRU/CeSem2-DCRU";
import CeSem3DCRU from "./MyComponents/Branch/DCRU/Ce-DCRU/CeSem3-DCRU";
import CeSem4DCRU from "./MyComponents/Branch/DCRU/Ce-DCRU/CeSem4-DCRU";
import CeSem5DCRU from "./MyComponents/Branch/DCRU/Ce-DCRU/CeSem5-DCRU";
import CeSem6DCRU from "./MyComponents/Branch/DCRU/Ce-DCRU/CeSem6-DCRU";
import CeSem7DCRU from "./MyComponents/Branch/DCRU/Ce-DCRU/CeSem7-DCRU";
import CeSem8DCRU from "./MyComponents/Branch/DCRU/Ce-DCRU/CeSem8-DCRU";

import CseSem1DCRU from "./MyComponents/Branch/DCRU/Cse-DCRU/CseSem1-DCRU";
import CseSem2DCRU from "./MyComponents/Branch/DCRU/Cse-DCRU/CseSem2-DCRU";
import CseSem3DCRU from "./MyComponents/Branch/DCRU/Cse-DCRU/CseSem3-DCRU";
import CseSem4DCRU from "./MyComponents/Branch/DCRU/Cse-DCRU/CseSem4-DCRU";
import CseSem5DCRU from "./MyComponents/Branch/DCRU/Cse-DCRU/CseSem5-DCRU";
import CseSem6DCRU from "./MyComponents/Branch/DCRU/Cse-DCRU/CseSem6-DCRU";
import CseSem7DCRU from "./MyComponents/Branch/DCRU/Cse-DCRU/CseSem7-DCRU";
import CseSem8DCRU from "./MyComponents/Branch/DCRU/Cse-DCRU/CseSem8-DCRU";

import EceSem1DCRU from "./MyComponents/Branch/DCRU/Ece-DCRU/EceSem1-DCRU";
import EceSem2DCRU from "./MyComponents/Branch/DCRU/Ece-DCRU/EceSem2-DCRU";
import EceSem3DCRU from "./MyComponents/Branch/DCRU/Ece-DCRU/EceSem3-DCRU";
import EceSem4DCRU from "./MyComponents/Branch/DCRU/Ece-DCRU/EceSem4-DCRU";
import EceSem5DCRU from "./MyComponents/Branch/DCRU/Ece-DCRU/EceSem5-DCRU";
import EceSem6DCRU from "./MyComponents/Branch/DCRU/Ece-DCRU/EceSem6-DCRU";
import EceSem7DCRU from "./MyComponents/Branch/DCRU/Ece-DCRU/EceSem7-DCRU";
import EceSem8DCRU from "./MyComponents/Branch/DCRU/Ece-DCRU/EceSem8-DCRU";

import EeSem1DCRU from "./MyComponents/Branch/DCRU/Ee-DCRU/EeSem1-DCRU";
import EeSem2DCRU from "./MyComponents/Branch/DCRU/Ee-DCRU/EeSem2-DCRU";
import EeSem3DCRU from "./MyComponents/Branch/DCRU/Ee-DCRU/EeSem3-DCRU";
import EeSem4DCRU from "./MyComponents/Branch/DCRU/Ee-DCRU/EeSem4-DCRU";
import EeSem5DCRU from "./MyComponents/Branch/DCRU/Ee-DCRU/EeSem5-DCRU";
import EeSem6DCRU from "./MyComponents/Branch/DCRU/Ee-DCRU/EeSem6-DCRU";
import EeSem7DCRU from "./MyComponents/Branch/DCRU/Ee-DCRU/EeSem7-DCRU";
import EeSem8DCRU from "./MyComponents/Branch/DCRU/Ee-DCRU/EeSem8-DCRU";

import MeSem1DCRU from "./MyComponents/Branch/DCRU/Me-DCRU/MeSem1-DCRU";
import MeSem2DCRU from "./MyComponents/Branch/DCRU/Me-DCRU/MeSem2-DCRU";
import MeSem3DCRU from "./MyComponents/Branch/DCRU/Me-DCRU/MeSem3-DCRU";
import MeSem4DCRU from "./MyComponents/Branch/DCRU/Me-DCRU/MeSem4-DCRU";
import MeSem5DCRU from "./MyComponents/Branch/DCRU/Me-DCRU/MeSem5-DCRU";
import MeSem6DCRU from "./MyComponents/Branch/DCRU/Me-DCRU/MeSem6-DCRU";
import MeSem7DCRU from "./MyComponents/Branch/DCRU/Me-DCRU/MeSem7-DCRU";
import MeSem8DCRU from "./MyComponents/Branch/DCRU/Me-DCRU/MeSem8-DCRU";

import BeSem1GJU from "./MyComponents/Branch/GJU/Be-GJU/BeSem1-GJU";
import BeSem2GJU from "./MyComponents/Branch/GJU/Be-GJU/BeSem2-GJU";
import BeSem3GJU from "./MyComponents/Branch/GJU/Be-GJU/BeSem3-GJU";
import BeSem4GJU from "./MyComponents/Branch/GJU/Be-GJU/BeSem4-GJU";
import BeSem5GJU from "./MyComponents/Branch/GJU/Be-GJU/BeSem5-GJU";
import BeSem6GJU from "./MyComponents/Branch/GJU/Be-GJU/BeSem6-GJU";
import BeSem7GJU from "./MyComponents/Branch/GJU/Be-GJU/BeSem7-GJU";
import BeSem8GJU from "./MyComponents/Branch/GJU/Be-GJU/BeSem8-GJU";

import CeSem1GJU from "./MyComponents/Branch/GJU/Ce-GJU/CeSem1-GJU";
import CeSem2GJU from "./MyComponents/Branch/GJU/Ce-GJU/CeSem2-GJU";
import CeSem3GJU from "./MyComponents/Branch/GJU/Ce-GJU/CeSem3-GJU";
import CeSem4GJU from "./MyComponents/Branch/GJU/Ce-GJU/CeSem4-GJU";
import CeSem5GJU from "./MyComponents/Branch/GJU/Ce-GJU/CeSem5-GJU";
import CeSem6GJU from "./MyComponents/Branch/GJU/Ce-GJU/CeSem6-GJU";
import CeSem7GJU from "./MyComponents/Branch/GJU/Ce-GJU/CeSem7-GJU";
import CeSem8GJU from "./MyComponents/Branch/GJU/Ce-GJU/CeSem8-GJU";

import CseSem1GJU from "./MyComponents/Branch/GJU/Cse-GJU/CseSem1-GJU";
import CseSem2GJU from "./MyComponents/Branch/GJU/Cse-GJU/CseSem2-GJU";
import CseSem3GJU from "./MyComponents/Branch/GJU/Cse-GJU/CseSem3-GJU";
import CseSem4GJU from "./MyComponents/Branch/GJU/Cse-GJU/CseSem4-GJU";
import CseSem5GJU from "./MyComponents/Branch/GJU/Cse-GJU/CseSem5-GJU";
import CseSem6GJU from "./MyComponents/Branch/GJU/Cse-GJU/CseSem6-GJU";
import CseSem7GJU from "./MyComponents/Branch/GJU/Cse-GJU/CseSem7-GJU";
import CseSem8GJU from "./MyComponents/Branch/GJU/Cse-GJU/CseSem8-GJU";

import EceSem1GJU from "./MyComponents/Branch/GJU/Ece-GJU/EceSem1-GJU";
import EceSem2GJU from "./MyComponents/Branch/GJU/Ece-GJU/EceSem2-GJU";
import EceSem3GJU from "./MyComponents/Branch/GJU/Ece-GJU/EceSem3-GJU";
import EceSem4GJU from "./MyComponents/Branch/GJU/Ece-GJU/EceSem4-GJU";
import EceSem5GJU from "./MyComponents/Branch/GJU/Ece-GJU/EceSem5-GJU";
import EceSem6GJU from "./MyComponents/Branch/GJU/Ece-GJU/EceSem6-GJU";
import EceSem7GJU from "./MyComponents/Branch/GJU/Ece-GJU/EceSem7-GJU";
import EceSem8GJU from "./MyComponents/Branch/GJU/Ece-GJU/EceSem8-GJU";

import EeSem1GJU from "./MyComponents/Branch/GJU/Ee-GJU/EeSem1-GJU";
import EeSem2GJU from "./MyComponents/Branch/GJU/Ee-GJU/EeSem2-GJU";
import EeSem3GJU from "./MyComponents/Branch/GJU/Ee-GJU/EeSem3-GJU";
import EeSem4GJU from "./MyComponents/Branch/GJU/Ee-GJU/EeSem4-GJU";
import EeSem5GJU from "./MyComponents/Branch/GJU/Ee-GJU/EeSem5-GJU";
import EeSem6GJU from "./MyComponents/Branch/GJU/Ee-GJU/EeSem6-GJU";
import EeSem7GJU from "./MyComponents/Branch/GJU/Ee-GJU/EeSem7-GJU";
import EeSem8GJU from "./MyComponents/Branch/GJU/Ee-GJU/EeSem8-GJU";

import MeSem1GJU from "./MyComponents/Branch/GJU/Me-GJU/MeSem1-GJU";
import MeSem2GJU from "./MyComponents/Branch/GJU/Me-GJU/MeSem2-GJU";
import MeSem3GJU from "./MyComponents/Branch/GJU/Me-GJU/MeSem3-GJU";
import MeSem4GJU from "./MyComponents/Branch/GJU/Me-GJU/MeSem4-GJU";
import MeSem5GJU from "./MyComponents/Branch/GJU/Me-GJU/MeSem5-GJU";
import MeSem6GJU from "./MyComponents/Branch/GJU/Me-GJU/MeSem6-GJU";
import MeSem7GJU from "./MyComponents/Branch/GJU/Me-GJU/MeSem7-GJU";
import MeSem8GJU from "./MyComponents/Branch/GJU/Me-GJU/MeSem8-GJU";

import BeSem1JCBU from "./MyComponents/Branch/JCBU/Be-JCBU/BeSem1-JCBU";
import BeSem2JCBU from "./MyComponents/Branch/JCBU/Be-JCBU/BeSem2-JCBU";
import BeSem3JCBU from "./MyComponents/Branch/JCBU/Be-JCBU/BeSem3-JCBU";
import BeSem4JCBU from "./MyComponents/Branch/JCBU/Be-JCBU/BeSem4-JCBU";
import BeSem5JCBU from "./MyComponents/Branch/JCBU/Be-JCBU/BeSem5-JCBU";
import BeSem6JCBU from "./MyComponents/Branch/JCBU/Be-JCBU/BeSem6-JCBU";
import BeSem7JCBU from "./MyComponents/Branch/JCBU/Be-JCBU/BeSem7-JCBU";
import BeSem8JCBU from "./MyComponents/Branch/JCBU/Be-JCBU/BeSem8-JCBU";

import CeSem1JCBU from "./MyComponents/Branch/JCBU/Be-JCBU/CeSem1-JCBU";
import CeSem2JCBU from "./MyComponents/Branch/JCBU/Be-JCBU/CeSem2-JCBU";
import CeSem3JCBU from "./MyComponents/Branch/JCBU/Be-JCBU/CeSem3-JCBU";
import CeSem4JCBU from "./MyComponents/Branch/JCBU/Be-JCBU/CeSem4-JCBU";
import CeSem5JCBU from "./MyComponents/Branch/JCBU/Be-JCBU/CeSem5-JCBU";
import CeSem6JCBU from "./MyComponents/Branch/JCBU/Be-JCBU/CeSem6-JCBU";
import CeSem7JCBU from "./MyComponents/Branch/JCBU/Be-JCBU/CeSem7-JCBU";
import CeSem8JCBU from "./MyComponents/Branch/JCBU/Be-JCBU/CeSem8-JCBU";

import CseSem1JCBU from "./MyComponents/Branch/JCBU/Cse-JCBU/CseSem1-JCBU";
import CseSem2JCBU from "./MyComponents/Branch/JCBU/Cse-JCBU/CseSem2-JCBU";
import CseSem3JCBU from "./MyComponents/Branch/JCBU/Cse-JCBU/CseSem3-JCBU";
import CseSem4JCBU from "./MyComponents/Branch/JCBU/Cse-JCBU/CseSem4-JCBU";
import CseSem5JCBU from "./MyComponents/Branch/JCBU/Cse-JCBU/CseSem5-JCBU";
import CseSem6JCBU from "./MyComponents/Branch/JCBU/Cse-JCBU/CseSem6-JCBU";
import CseSem7JCBU from "./MyComponents/Branch/JCBU/Cse-JCBU/CseSem7-JCBU";
import CseSem8JCBU from "./MyComponents/Branch/JCBU/Cse-JCBU/CseSem8-JCBU";

import EceSem1JCBU from "./MyComponents/Branch/JCBU/Ece-JCBU/EceSem1-JCBU";
import EceSem2JCBU from "./MyComponents/Branch/JCBU/Ece-JCBU/EceSem2-JCBU";
import EceSem3JCBU from "./MyComponents/Branch/JCBU/Ece-JCBU/EceSem3-JCBU";
import EceSem4JCBU from "./MyComponents/Branch/JCBU/Ece-JCBU/EceSem4-JCBU";
import EceSem5JCBU from "./MyComponents/Branch/JCBU/Ece-JCBU/EceSem5-JCBU";
import EceSem6JCBU from "./MyComponents/Branch/JCBU/Ece-JCBU/EceSem6-JCBU";
import EceSem7JCBU from "./MyComponents/Branch/JCBU/Ece-JCBU/EceSem7-JCBU";
import EceSem8JCBU from "./MyComponents/Branch/JCBU/Ece-JCBU/EceSem8-JCBU";

import EeSem1JCBU from "./MyComponents/Branch/JCBU/Ee-JCBU/EeSem1-JCBU";
import EeSem2JCBU from "./MyComponents/Branch/JCBU/Ee-JCBU/EeSem2-JCBU";
import EeSem3JCBU from "./MyComponents/Branch/JCBU/Ee-JCBU/EeSem3-JCBU";
import EeSem4JCBU from "./MyComponents/Branch/JCBU/Ee-JCBU/EeSem4-JCBU";
import EeSem5JCBU from "./MyComponents/Branch/JCBU/Ee-JCBU/EeSem5-JCBU";
import EeSem6JCBU from "./MyComponents/Branch/JCBU/Ee-JCBU/EeSem6-JCBU";
import EeSem7JCBU from "./MyComponents/Branch/JCBU/Ee-JCBU/EeSem7-JCBU";
import EeSem8JCBU from "./MyComponents/Branch/JCBU/Ee-JCBU/EeSem8-JCBU";

import MeSem1JCBU from "./MyComponents/Branch/JCBU/Me-JCBU/MeSem1-JCBU";
import MeSem2JCBU from "./MyComponents/Branch/JCBU/Me-JCBU/MeSem2-JCBU";
import MeSem3JCBU from "./MyComponents/Branch/JCBU/Me-JCBU/MeSem3-JCBU";
import MeSem4JCBU from "./MyComponents/Branch/JCBU/Me-JCBU/MeSem4-JCBU";
import MeSem5JCBU from "./MyComponents/Branch/JCBU/Me-JCBU/MeSem5-JCBU";
import MeSem6JCBU from "./MyComponents/Branch/JCBU/Me-JCBU/MeSem6-JCBU";
import MeSem7JCBU from "./MyComponents/Branch/JCBU/Me-JCBU/MeSem7-JCBU";
import MeSem8JCBU from "./MyComponents/Branch/JCBU/Me-JCBU/MeSem8-JCBU";

import BeSem1KU from "./MyComponents/Branch/KU/Be-KU/BeSem1-KU";
import BeSem2KU from "./MyComponents/Branch/KU/Be-KU/BeSem2-KU";
import BeSem3KU from "./MyComponents/Branch/KU/Be-KU/BeSem3-KU";
import BeSem4KU from "./MyComponents/Branch/KU/Be-KU/BeSem4-KU";
import BeSem5KU from "./MyComponents/Branch/KU/Be-KU/BeSem5-KU";
import BeSem6KU from "./MyComponents/Branch/KU/Be-KU/BeSem6-KU";
import BeSem7KU from "./MyComponents/Branch/KU/Be-KU/BeSem7-KU";
import BeSem8KU from "./MyComponents/Branch/KU/Be-KU/BeSem8-KU";

import CeSem1KU from "./MyComponents/Branch/KU/Ce-KU/CeSem1-KU";
import CeSem2KU from "./MyComponents/Branch/KU/Ce-KU/CeSem2-KU";
import CeSem3KU from "./MyComponents/Branch/KU/Ce-KU/CeSem3-KU";
import CeSem4KU from "./MyComponents/Branch/KU/Ce-KU/CeSem4-KU";
import CeSem5KU from "./MyComponents/Branch/KU/Ce-KU/CeSem5-KU";
import CeSem6KU from "./MyComponents/Branch/KU/Ce-KU/CeSem6-KU";
import CeSem7KU from "./MyComponents/Branch/KU/Ce-KU/CeSem7-KU";
import CeSem8KU from "./MyComponents/Branch/KU/Ce-KU/CeSem8-KU";

import CseSem1KU from "./MyComponents/Branch/KU/Cse-KU/CseSem1-KU";
import CseSem2KU from "./MyComponents/Branch/KU/Cse-KU/CseSem2-KU";
import CseSem3KU from "./MyComponents/Branch/KU/Cse-KU/CseSem3-KU";
import CseSem4KU from "./MyComponents/Branch/KU/Cse-KU/CseSem4-KU";
import CseSem5KU from "./MyComponents/Branch/KU/Cse-KU/CseSem5-KU";
import CseSem6KU from "./MyComponents/Branch/KU/Cse-KU/CseSem6-KU";
import CseSem7KU from "./MyComponents/Branch/KU/Cse-KU/CseSem7-KU";
import CseSem8KU from "./MyComponents/Branch/KU/Cse-KU/CseSem8-KU";

import EceSem1KU from "./MyComponents/Branch/KU/Ece-KU/EceSem1-KU";
import EceSem2KU from "./MyComponents/Branch/KU/Ece-KU/EceSem2-KU";
import EceSem3KU from "./MyComponents/Branch/KU/Ece-KU/EceSem3-KU";
import EceSem4KU from "./MyComponents/Branch/KU/Ece-KU/EceSem4-KU";
import EceSem5KU from "./MyComponents/Branch/KU/Ece-KU/EceSem5-KU";
import EceSem6KU from "./MyComponents/Branch/KU/Ece-KU/EceSem6-KU";
import EceSem7KU from "./MyComponents/Branch/KU/Ece-KU/EceSem7-KU";
import EceSem8KU from "./MyComponents/Branch/KU/Ece-KU/EceSem8-KU";

import EeSem1KU from "./MyComponents/Branch/KU/Ee-KU/EeSem1-KU";
import EeSem2KU from "./MyComponents/Branch/KU/Ee-KU/EeSem2-KU";
import EeSem3KU from "./MyComponents/Branch/KU/Ee-KU/EeSem3-KU";
import EeSem4KU from "./MyComponents/Branch/KU/Ee-KU/EeSem4-KU";
import EeSem5KU from "./MyComponents/Branch/KU/Ee-KU/EeSem5-KU";
import EeSem6KU from "./MyComponents/Branch/KU/Ee-KU/EeSem6-KU";
import EeSem7KU from "./MyComponents/Branch/KU/Ee-KU/EeSem7-KU";
import EeSem8KU from "./MyComponents/Branch/KU/Ee-KU/EeSem8-KU";

import MeSem1KU from "./MyComponents/Branch/KU/Me-KU/MeSem1-KU";
import MeSem2KU from "./MyComponents/Branch/KU/Me-KU/MeSem2-KU";
import MeSem3KU from "./MyComponents/Branch/KU/Me-KU/MeSem3-KU";
import MeSem4KU from "./MyComponents/Branch/KU/Me-KU/MeSem4-KU";
import MeSem5KU from "./MyComponents/Branch/KU/Me-KU/MeSem5-KU";
import MeSem6KU from "./MyComponents/Branch/KU/Me-KU/MeSem6-KU";
import MeSem7KU from "./MyComponents/Branch/KU/Me-KU/MeSem7-KU";
import MeSem8KU from "./MyComponents/Branch/KU/Me-KU/MeSem8-KU";

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

          <Route path="/BeSem1DCRU" element={<BeSem1DCRU />} />
          <Route path="/BeSem2DCRU" element={<BeSem2DCRU />} />
          <Route path="/BeSem3DCRU" element={<BeSem3DCRU />} />
          <Route path="/BeSem4DCRU" element={<BeSem4DCRU />} />
          <Route path="/BeSem5DCRU" element={<BeSem5DCRU />} />
          <Route path="/BeSem6DCRU" element={<BeSem6DCRU />} />
          <Route path="/BeSem7DCRU" element={<BeSem7DCRU />} />
          <Route path="/BeSem8DCRU" element={<BeSem8DCRU />} />

          <Route path="/CeSem1DCRU" element={<CeSem1DCRU />} />
          <Route path="/CeSem2DCRU" element={<CeSem2DCRU />} />
          <Route path="/CeSem3DCRU" element={<CeSem3DCRU />} />
          <Route path="/CeSem4DCRU" element={<CeSem4DCRU />} />
          <Route path="/CeSem5DCRU" element={<CeSem5DCRU />} />
          <Route path="/CeSem6DCRU" element={<CeSem6DCRU />} />
          <Route path="/CeSem7DCRU" element={<CeSem7DCRU />} />
          <Route path="/CeSem8DCRU" element={<CeSem8DCRU />} />

          <Route path="/CseSem1DCRU" element={<CseSem1DCRU />} />
          <Route path="/CseSem2DCRU" element={<CseSem2DCRU />} />
          <Route path="/CseSem3DCRU" element={<CseSem3DCRU />} />
          <Route path="/CseSem4DCRU" element={<CseSem4DCRU />} />
          <Route path="/CseSem5DCRU" element={<CseSem5DCRU />} />
          <Route path="/CseSem6DCRU" element={<CseSem6DCRU />} />
          <Route path="/CseSem7DCRU" element={<CseSem7DCRU />} />
          <Route path="/CseSem8DCRU" element={<CseSem8DCRU />} />

          <Route path="/EceSem1DCRU" element={<EceSem1DCRU />} />
          <Route path="/EceSem2DCRU" element={<EceSem2DCRU />} />
          <Route path="/EceSem3DCRU" element={<EceSem3DCRU />} />
          <Route path="/EceSem4DCRU" element={<EceSem4DCRU />} />
          <Route path="/EceSem5DCRU" element={<EceSem5DCRU />} />
          <Route path="/EceSem6DCRU" element={<EceSem6DCRU />} />
          <Route path="/EceSem7DCRU" element={<EceSem7DCRU />} />
          <Route path="/EceSem8DCRU" element={<EceSem8DCRU />} />

          <Route path="/EeSem1DCRU" element={<EeSem1DCRU />} />
          <Route path="/EeSem2DCRU" element={<EeSem2DCRU />} />
          <Route path="/EeSem3DCRU" element={<EeSem3DCRU />} />
          <Route path="/EeSem4DCRU" element={<EeSem4DCRU />} />
          <Route path="/EeSem5DCRU" element={<EeSem5DCRU />} />
          <Route path="/EeSem6DCRU" element={<EeSem6DCRU />} />
          <Route path="/EeSem7DCRU" element={<EeSem7DCRU />} />
          <Route path="/EeSem8DCRU" element={<EeSem8DCRU />} />

          <Route path="/MeSem1DCRU" element={<MeSem1DCRU />} />
          <Route path="/MeSem2DCRU" element={<MeSem2DCRU />} />
          <Route path="/MeSem3DCRU" element={<MeSem3DCRU />} />
          <Route path="/MeSem4DCRU" element={<MeSem4DCRU />} />
          <Route path="/MeSem5DCRU" element={<MeSem5DCRU />} />
          <Route path="/MeSem6DCRU" element={<MeSem6DCRU />} />
          <Route path="/MeSem7DCRU" element={<MeSem7DCRU />} />
          <Route path="/MeSem8DCRU" element={<MeSem8DCRU />} />

          <Route path="/BeSem1GJU" element={<BeSem1GJU />} />
          <Route path="/BeSem2GJU" element={<BeSem2GJU />} />
          <Route path="/BeSem3GJU" element={<BeSem3GJU />} />
          <Route path="/BeSem4GJU" element={<BeSem4GJU />} />
          <Route path="/BeSem5GJU" element={<BeSem5GJU />} />
          <Route path="/BeSem6GJU" element={<BeSem6GJU />} />
          <Route path="/BeSem7GJU" element={<BeSem7GJU />} />
          <Route path="/BeSem8GJU" element={<BeSem8GJU />} />

          <Route path="/CeSem1GJU" element={<CeSem1GJU />} />
          <Route path="/CeSem2GJU" element={<CeSem2GJU />} />
          <Route path="/CeSem3GJU" element={<CeSem3GJU />} />
          <Route path="/CeSem4GJU" element={<CeSem4GJU />} />
          <Route path="/CeSem5GJU" element={<CeSem5GJU />} />
          <Route path="/CeSem6GJU" element={<CeSem6GJU />} />
          <Route path="/CeSem7GJU" element={<CeSem7GJU />} />
          <Route path="/CeSem8GJU" element={<CeSem8GJU />} />

          <Route path="/CseSem1GJU" element={<CseSem1GJU />} />
          <Route path="/CseSem2GJU" element={<CseSem2GJU />} />
          <Route path="/CseSem3GJU" element={<CseSem3GJU />} />
          <Route path="/CseSem4GJU" element={<CseSem4GJU />} />
          <Route path="/CseSem5GJU" element={<CseSem5GJU />} />
          <Route path="/CseSem6GJU" element={<CseSem6GJU />} />
          <Route path="/CseSem7GJU" element={<CseSem7GJU />} />
          <Route path="/CseSem8GJU" element={<CseSem8GJU />} />

          <Route path="/EceSem1GJU" element={<EceSem1GJU />} />
          <Route path="/EceSem2GJU" element={<EceSem2GJU />} />
          <Route path="/EceSem3GJU" element={<EceSem3GJU />} />
          <Route path="/EceSem4GJU" element={<EceSem4GJU />} />
          <Route path="/EceSem5GJU" element={<EceSem5GJU />} />
          <Route path="/EceSem6GJU" element={<EceSem6GJU />} />
          <Route path="/EceSem7GJU" element={<EceSem7GJU />} />
          <Route path="/EceSem8GJU" element={<EceSem8GJU />} />

          <Route path="/EeSem1GJU" element={<EeSem1GJU />} />
          <Route path="/EeSem2GJU" element={<EeSem2GJU />} />
          <Route path="/EeSem3GJU" element={<EeSem3GJU />} />
          <Route path="/EeSem4GJU" element={<EeSem4GJU />} />
          <Route path="/EeSem5GJU" element={<EeSem5GJU />} />
          <Route path="/EeSem6GJU" element={<EeSem6GJU />} />
          <Route path="/EeSem7GJU" element={<EeSem7GJU />} />
          <Route path="/EeSem8GJU" element={<EeSem8GJU />} />

          <Route path="/MeSem1GJU" element={<MeSem1GJU />} />
          <Route path="/MeSem2GJU" element={<MeSem2GJU />} />
          <Route path="/MeSem3GJU" element={<MeSem3GJU />} />
          <Route path="/MeSem4GJU" element={<MeSem4GJU />} />
          <Route path="/MeSem5GJU" element={<MeSem5GJU />} />
          <Route path="/MeSem6GJU" element={<MeSem6GJU />} />
          <Route path="/MeSem7GJU" element={<MeSem7GJU />} />
          <Route path="/MeSem8GJU" element={<MeSem8GJU />} />

          <Route path="/BeSem1JCBU" element={<BeSem1JCBU />} />
          <Route path="/BeSem2JCBU" element={<BeSem2JCBU />} />
          <Route path="/BeSem3JCBU" element={<BeSem3JCBU />} />
          <Route path="/BeSem4JCBU" element={<BeSem4JCBU />} />
          <Route path="/BeSem5JCBU" element={<BeSem5JCBU />} />
          <Route path="/BeSem6JCBU" element={<BeSem6JCBU />} />
          <Route path="/BeSem7JCBU" element={<BeSem7JCBU />} />
          <Route path="/BeSem8JCBU" element={<BeSem8JCBU />} />

          <Route path="/CeSem1JCBU" element={<CeSem1JCBU />} />
          <Route path="/CeSem2JCBU" element={<CeSem2JCBU />} />
          <Route path="/CeSem3JCBU" element={<CeSem3JCBU />} />
          <Route path="/CeSem4JCBU" element={<CeSem4JCBU />} />
          <Route path="/CeSem5JCBU" element={<CeSem5JCBU />} />
          <Route path="/CeSem6JCBU" element={<CeSem6JCBU />} />
          <Route path="/CeSem7JCBU" element={<CeSem7JCBU />} />
          <Route path="/CeSem8JCBU" element={<CeSem8JCBU />} />

          <Route path="/CseSem1JCBU" element={<CseSem1JCBU />} />
          <Route path="/CseSem2JCBU" element={<CseSem2JCBU />} />
          <Route path="/CseSem3JCBU" element={<CseSem3JCBU />} />
          <Route path="/CseSem4JCBU" element={<CseSem4JCBU />} />
          <Route path="/CseSem5JCBU" element={<CseSem5JCBU />} />
          <Route path="/CseSem6JCBU" element={<CseSem6JCBU />} />
          <Route path="/CseSem7JCBU" element={<CseSem7JCBU />} />
          <Route path="/CseSem8JCBU" element={<CseSem8JCBU />} />

          <Route path="/EceSem1JCBU" element={<EceSem1JCBU />} />
          <Route path="/EceSem2JCBU" element={<EceSem2JCBU />} />
          <Route path="/EceSem3JCBU" element={<EceSem3JCBU />} />
          <Route path="/EceSem4JCBU" element={<EceSem4JCBU />} />
          <Route path="/EceSem5JCBU" element={<EceSem5JCBU />} />
          <Route path="/EceSem6JCBU" element={<EceSem6JCBU />} />
          <Route path="/EceSem7JCBU" element={<EceSem7JCBU />} />
          <Route path="/EceSem8JCBU" element={<EceSem8JCBU />} />

          <Route path="/EeSem1JCBU" element={<EeSem1JCBU />} />
          <Route path="/EeSem2JCBU" element={<EeSem2JCBU />} />
          <Route path="/EeSem3JCBU" element={<EeSem3JCBU />} />
          <Route path="/EeSem4JCBU" element={<EeSem4JCBU />} />
          <Route path="/EeSem5JCBU" element={<EeSem5JCBU />} />
          <Route path="/EeSem6JCBU" element={<EeSem6JCBU />} />
          <Route path="/EeSem7JCBU" element={<EeSem7JCBU />} />
          <Route path="/EeSem8JCBU" element={<EeSem8JCBU />} />

          <Route path="/MeSem1JCBU" element={<MeSem1JCBU />} />
          <Route path="/MeSem2JCBU" element={<MeSem2JCBU />} />
          <Route path="/MeSem3JCBU" element={<MeSem3JCBU />} />
          <Route path="/MeSem4JCBU" element={<MeSem4JCBU />} />
          <Route path="/MeSem5JCBU" element={<MeSem5JCBU />} />
          <Route path="/MeSem6JCBU" element={<MeSem6JCBU />} />
          <Route path="/MeSem7JCBU" element={<MeSem7JCBU />} />
          <Route path="/MeSem8JCBU" element={<MeSem8JCBU />} />

          <Route path="/BeSem1KU" element={<BeSem1KU />} />
          <Route path="/BeSem2KU" element={<BeSem2KU />} />
          <Route path="/BeSem3KU" element={<BeSem3KU />} />
          <Route path="/BeSem4KU" element={<BeSem4KU />} />
          <Route path="/BeSem5KU" element={<BeSem5KU />} />
          <Route path="/BeSem6KU" element={<BeSem6KU />} />
          <Route path="/BeSem7KU" element={<BeSem7KU />} />
          <Route path="/BeSem8KU" element={<BeSem8KU />} />

          <Route path="/CeSem1KU" element={<CeSem1KU />} />
          <Route path="/CeSem2KU" element={<CeSem2KU />} />
          <Route path="/CeSem3KU" element={<CeSem3KU />} />
          <Route path="/CeSem4KU" element={<CeSem4KU />} />
          <Route path="/CeSem5KU" element={<CeSem5KU />} />
          <Route path="/CeSem6KU" element={<CeSem6KU />} />
          <Route path="/CeSem7KU" element={<CeSem7KU />} />
          <Route path="/CeSem8KU" element={<CeSem8KU />} />

          <Route path="/CseSem1KU" element={<CseSem1KU />} />
          <Route path="/CseSem2KU" element={<CseSem2KU />} />
          <Route path="/CseSem3KU" element={<CseSem3KU />} />
          <Route path="/CseSem4KU" element={<CseSem4KU />} />
          <Route path="/CseSem5KU" element={<CseSem5KU />} />
          <Route path="/CseSem6KU" element={<CseSem6KU />} />
          <Route path="/CseSem7KU" element={<CseSem7KU />} />
          <Route path="/CseSem8KU" element={<CseSem8KU />} />

          <Route path="/EceSem1KU" element={<EceSem1KU />} />
          <Route path="/EceSem2KU" element={<EceSem2KU />} />
          <Route path="/EceSem3KU" element={<EceSem3KU />} />
          <Route path="/EceSem4KU" element={<EceSem4KU />} />
          <Route path="/EceSem5KU" element={<EceSem5KU />} />
          <Route path="/EceSem6KU" element={<EceSem6KU />} />
          <Route path="/EceSem7KU" element={<EceSem7KU />} />
          <Route path="/EceSem8KU" element={<EceSem8KU />} />

          <Route path="/EeSem1KU" element={<EeSem1KU />} />
          <Route path="/EeSem2KU" element={<EeSem2KU />} />
          <Route path="/EeSem3KU" element={<EeSem3KU />} />
          <Route path="/EeSem4KU" element={<EeSem4KU />} />
          <Route path="/EeSem5KU" element={<EeSem5KU />} />
          <Route path="/EeSem6KU" element={<EeSem6KU />} />
          <Route path="/EeSem7KU" element={<EeSem7KU />} />
          <Route path="/EeSem8KU" element={<EeSem8KU />} />

          <Route path="/MeSem1KU" element={<MeSem1KU />} />
          <Route path="/MeSem2KU" element={<MeSem2KU />} />
          <Route path="/MeSem3KU" element={<MeSem3KU />} />
          <Route path="/MeSem4KU" element={<MeSem4KU />} />
          <Route path="/MeSem5KU" element={<MeSem5KU />} />
          <Route path="/MeSem6KU" element={<MeSem6KU />} />
          <Route path="/MeSem7KU" element={<MeSem7KU />} />
          <Route path="/MeSem8KU" element={<MeSem8KU />} />

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
