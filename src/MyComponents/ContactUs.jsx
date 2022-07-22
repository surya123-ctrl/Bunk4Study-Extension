import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";

const Result = () => {
  return <p> Message Sent!, We will contact you soon</p>;
};

const ContactUs = () => {
  const [result, showResult] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tjiphpn",
        "template_c1iy058",
        e.target,
        "qcc9pBN0jP8x02hRV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <form action="" onSubmit={sendEmail} style={{ backgroundColor: "#Dbe6ea" }}>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Contact us by filling the form" />
      </Helmet>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-col text-center w-full mb-3">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-0 mt-0 text-gray-900">
              Contact Us
            </h1>
            <p
              class="lg:w-2/3 mx-auto leading-relaxed text-base fw-bold "
              style={{ marginBottom: "5px" }}
            >
              Message Any Doubt Below{" "}
              <i class="bi bi-arrow-down-square-fill ms-1"></i>
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label
                    for="name"
                    class="leading-7 text-sm text-gray-600 fw-bold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label
                    for="email"
                    class="leading-7 text-sm text-gray-600 fw-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label
                    for="message"
                    class="leading-7 text-sm text-gray-600 fw-bold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Contact Us
                </button>
              </div>
              <div className="row">{result ? <Result /> : null}</div>

              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a
                  class="text-blue-500"
                  href="mailto:contact@bunk4study.com"
                  target="_blank"
                  text-decoration="none"
                  rel="noreferrer"
                >
                  contact@bunk4study.com
                </a>
                <br />
                <br />
                <span
                  class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
                  style={{ fontSize: "20px" }}
                >
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
                    href="https://discord.gg/jCpBSH8mHF"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="bi bi-discord"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default ContactUs;
