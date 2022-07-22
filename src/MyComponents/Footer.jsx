import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <footer className="footer">
        <div className="footer-inside">
          <div className="left-footer">
            <img
              className="image"
              src="https://i.imgur.com/8w7Vp9R.png"
              alt="logo"
              href="/"
            />
            <p className="text1">© 2022 Bunk4Study</p>
            <p className="text2">
              Bunk4Study was &lt;/&gt; with ❤️ by BUNKERS 2022®
            </p>
          </div>
          <div className="right-footer">
            <div className="footer-part">
              <p>
                <Link to={"/"}>Home</Link>
              </p>
              <p>
                <Link to={"/About"}>About</Link>
              </p>
              <p>
                <Link to={"/Credits"}>Credits</Link>
              </p>
              <p>
                <Link to={"/Question"}>Question Paper</Link>
              </p>
              <p>
                <Link to={"/ContactUs"}>Contact Us</Link>
              </p>
              <p>
                <Link to={"/privacy"}>Privacy Policy</Link>
              </p>
              <p>
                <Link to={"/faq"}>FAQ</Link>
              </p>
              <p>
                <Link to={"/upload"}>Upload</Link>
              </p>
            </div>
            <div className="footer-icons">
              <a
                class="text-gray-500"
                href="https://www.facebook.com/Bunk4Study-100731219267632"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-facebook"></i>
              </a>
              <a
                class="ml-3 text-gray-500"
                href="https://twitter.com/Bunk4Study?t=9MGpXgxPPs7TvQ0xWATLhQ&s=09"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-twitter"></i>
              </a>
              <a
                class="ml-3 text-gray-500"
                href="https://instagram.com/bunk4study?utm_medium=copy_link"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a
                class="ml-3 text-gray-500 "
                href="https://www.linkedin.com/company/bunk4study/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-linkedin"></i>
              </a>
              <a
                class="ml-3 text-gray-500"
                href="https://telegram.me/bunk4study"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-telegram"></i>
              </a>
              <a
                class="ml-3 text-gray-500"
                href="https://discord.gg/s3uyrJ8mcT"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-discord"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
