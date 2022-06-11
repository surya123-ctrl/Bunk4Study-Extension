// import './Footer.css';
import React from "react";
import { Link } from "react-router-dom";
import navlogo from "../Images/navlogo.png";
import "../MyComponents/style/Footer.css";
const Footer = () => {
  return (
    <>
      {/* <footer class="text-gray-600 body-font bg-[#62aec5] " >
        <div class="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="/">
              
            <img src={navlogo} alt=" op" width="200" height="300" class="d-inline-block align-text-top" />
              
              <span class="ml--1 text-xl">Bunk4Study</span>
            </a>
            <p class="mt-0 text-sm text-dark ">   Change The Way Of Study</p>
          </div> 
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"><Link class="ml-3 text-xl text-gray-900" to={"/"}>Home</Link></h2>
              
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"><Link class="ml-3 text-xl text-gray-900" to={"/About"}>About</Link></h2>
             
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"><Link class="ml-3 text-xl text-gray-900" to={"/Question"}>Question Paper</Link></h2>
              
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"><Link class="ml-3 text-xl text-gray-900" to={"/ContactUs"}>ContactUs</Link></h2>
              
            </div>
          </div>
        </div> 
        </footer> */}
      {/* <footer className="footer">
        <p>© 2022 Bunk4Study</p>
        <div class="link-parent-container">
          <div className="link-container">
            <p>
              <Link to={"/"}>Home</Link>
            </p>
          </div>
          <div className="link-container">
            <p>
              <Link to={"/About"}>About</Link>
            </p>
          </div>
          <div className="link-container">
            <p>
              <Link to={"/Question"}>Question Paper</Link>
            </p>
          </div>
          <div className="link-container">
            <p>
              <Link to={"/ContactUs"}>Contact Us</Link>
            </p>
          </div>
        </div>
      </footer> */}

      <footer className="footer">
        <div className="footer-inside">
          <div className="left-footer">
            <img className="image" src={navlogo} alt="logo" href="/" />
            <p>© 2022 Bunk4Study</p>
          </div>
          <div className="right-footer">
            <div className="footer-part">
              <div className="link-container">
                <p>
                  <Link to={"/"}>Home</Link>
                </p>
              </div>
              <div className="link-container">
                <p>
                  <Link to={"/About"}>About</Link>
                </p>
              </div>
              <div className="link-container">
                <p>
                  <Link to={"/Credits"}>Credits</Link>
                </p>
              </div>
            </div>
            <div className="footer-part">
              <div className="link-container">
                <p>
                  <Link to={"/Question"}>Question Paper</Link>
                </p>
              </div>
              <div className="link-container">
                <p>
                  <Link to={"/ContactUs"}>Contact Us</Link>
                </p>
              </div>
            </div>
            <div className="footer-icons">
              <a
                class="text-gray-500"
                href="https://www.facebook.com/Bunk4Study-100731219267632"
                target="_blank" rel="noreferrer"
              >
                <i class="bi bi-facebook"></i>
              </a>
              <a
                class="ml-3 text-gray-500"
                href="https://twitter.com/Bunk4Study?t=9MGpXgxPPs7TvQ0xWATLhQ&s=09"
                target="_blank" rel="noreferrer"
              >
                <i class="bi bi-twitter"></i>
              </a>
              <a
                class="ml-3 text-gray-500"
                href="https://instagram.com/bunk4study?utm_medium=copy_link"
                target="_blank" rel="noreferrer"
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a
                class="ml-3 text-gray-500 "
                href="https://www.linkedin.com/company/bunk4study/?viewAsMember=true"
                target="_blank" rel="noreferrer"
              >
                <i class="bi bi-linkedin"></i>
              </a>
              <a
                class="ml-3 text-gray-500"
                href="https://telegram.me/bunk4study"
                target="_blank" rel="noreferrer"
              >
                <i class="bi bi-telegram"></i>
              </a>
              <a
                class="ml-3 text-gray-500"
                href="https://discord.gg/jCpBSH8mHF"
                target="_blank" rel="noreferrer"
              >
                <i class="bi bi-discord"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  <Link class="ml-3 text-xl text-gray-900" to={"/"}>
                    Home
                  </Link>
                </h2>
              </div> */}
      {/* <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  <Link class="ml-3 text-xl text-gray-900" to={"/About"}>
                    About
                  </Link>
                </h2>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  <Link class="ml-3 text-xl text-gray-900" to={"/Question"}>
                    Question Paper
                  </Link>
                </h2>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  <Link class="ml-3 text-xl text-gray-900" to={"/ContactUs"}>
                    ContactUs
                  </Link>
                </h2>
              </div> */}
      {/* <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a class="text-gray-500" href="https://www.facebook.com/Bunk4Study-100731219267632" target="_blank">
                <i class="bi bi-facebook"></i>
                </a>
                <a class="ml-3 text-gray-500" href="https://twitter.com/Bunk4Study?t=9MGpXgxPPs7TvQ0xWATLhQ&s=09" target="_blank">
                <i class="bi bi-twitter"></i>
                </a>
                <a class="ml-3 text-gray-500" href="https://instagram.com/bunk4study?utm_medium=copy_link" target="_blank">
                <i class="bi bi-instagram"></i>
                </a>
                <a class="ml-3 text-gray-500 " href="https://www.linkedin.com/company/bunk4study/?viewAsMember=true" target="_blank">
                <i class="bi bi-linkedin"></i>
                </a>
                <a class="ml-3 text-gray-500" href="https://telegram.me/bunk4study" target="_blank">
                <i class="bi bi-telegram"></i>
                </a>
                <a class="ml-3 text-gray-500" href="https://discord.gg/jCpBSH8mHF" target="_blank">
                <i class="bi bi-discord"></i>
                </a>

              </span> */}
    </>
  );
};

export default Footer;
