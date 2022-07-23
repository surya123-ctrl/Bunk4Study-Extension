import React from "react";
import "../MyComponents/style/Home.css";
import first from "../Images/first.svg";
import second from "../Images/second.svg";
import third from "../Images/third.svg";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <script
        async
        src="https://api.countapi.xyz/hit/bunk4study.com/cb602824-2439-43bc-bc02-624d3e8e14d0?callback=websiteVisits"
      ></script>
      <section id="header" class="container-fluid">
        <div className="container-fluid nav_bg">
          <Helmet>
            <title>Home - Bunk4Study</title>
            <meta
              name="description"
              content="qusetion bank for mdu and other universities"
            />
          </Helmet>

          <div className="row">
            <div className="col-10 mx-auto">
              <div className="col-md-40 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1 className="bunk-heading">
                  How Are You!!
                  <strong className="brand-name"> Bunkian </strong>
                  <div className="gift-container">
                    <Link to={"/Event"}>
                      <img
                        src="https://i.imgur.com/QhuCNop.png"
                        alt=""
                        className="gift"
                      />
                    </Link>
                  </div>
                </h1>

                <div className="MDU">
                  Question Bank &nbsp;
                  <div class="spinner-grow text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div className="branches-name">
                    <Link to={"/MDU"}>
                      <button
                        type="button"
                        class="btn btn-primary short-button"
                        title="Computer Science Engineering"
                      >
                        MDU
                      </button>
                    </Link>

                    <Link to={"/CDLU"}>
                      <button
                        type="button"
                        class="btn btn-primary short-button"
                        title="Electronics and Communications Engineering"
                      >
                        CDLU
                      </button>
                    </Link>

                    <Link to={"/DCRU"}>
                      <button
                        type="button"
                        class="btn btn-primary short-button"
                        title="Mechanical Engineering"
                      >
                        DCRU
                      </button>
                    </Link>

                    <Link to={"/GJU"}>
                      <button
                        type="button"
                        class="btn btn-primary short-button"
                        title="Electrical Engineering"
                      >
                        GJU
                      </button>
                    </Link>

                    <Link to={"/JCBU"}>
                      <button
                        type="button"
                        class="btn btn-primary short-button"
                        title="Civil Engineering"
                      >
                        JCBU
                      </button>
                    </Link>

                    <Link to={"/Question"}>
                      <button
                        type="button"
                        class="btn btn-primary short-button"
                        title="Click here to visit the QUESTIONS page"
                      >
                        Others
                      </button>
                    </Link>
                  </div>
                </div>

                <section class="text-gray-600 body-font">
                  <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4 text-center">
                      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div
                          class="border-2 border-gray-200 px-4 py-6 rounded-lg"
                          style={{
                            backgroundColor: "#000",
                            opacity: ".5",
                          }}
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="text-blue-500 w-12 h-12 mb-3 inline-block"
                            viewBox="0 0 24 24"
                            style={{ color: "white" }}
                          >
                            <path d="M8 17l4 4 4-4m-4-5v9"></path>
                            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                          </svg>
                          <h2 class="title-font font-medium text-3xl text-gray-900">
                            <CountUp
                              end={1200}
                              duration={5}
                              style={{ color: "white" }}
                            />
                          </h2>
                          <p style={{ color: "white" }}>Downloads</p>
                        </div>
                      </div>
                      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div
                          class="border-2 border-gray-200 px-4 py-6 rounded-lg"
                          style={{
                            backgroundColor: "#000",
                            opacity: ".5",
                          }}
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="text-blue-500 w-12 h-12 mb-3 inline-block"
                            viewBox="0 0 24 24"
                            style={{ color: "white" }}
                          >
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                          </svg>
                          <h2 class="title-font font-medium text-3xl text-gray-900">
                            <CountUp
                              end={500}
                              duration={5}
                              style={{ color: "white" }}
                            />
                          </h2>
                          <p style={{ color: "white" }}>Users</p>
                        </div>
                      </div>
                      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div
                          class="border-2 border-gray-200 px-4 py-6 rounded-lg"
                          style={{
                            backgroundColor: "#000",
                            opacity: ".5",
                          }}
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="text-blue-500 w-12 h-12 mb-3 inline-block"
                            viewBox="0 0 24 24"
                            style={{ color: "white" }}
                          >
                            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                          </svg>
                          <h2 class="title-font font-medium text-3xl text-gray-900">
                            <CountUp
                              end={200}
                              duration={5}
                              style={{ color: "white" }}
                            />
                          </h2>
                          <p style={{ color: "white" }}>Files</p>
                        </div>
                      </div>
                      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div
                          class="border-2 border-gray-200 px-4 py-6 rounded-lg"
                          style={{
                            backgroundColor: "#000",
                            opacity: ".5",
                          }}
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="text-blue-500 w-12 h-12 mb-3 inline-block"
                            viewBox="0 0 24 24"
                            style={{ color: "white" }}
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          </svg>
                          <h2
                            class="title-font font-medium text-2xl text-gray-900"
                            style={{ color: "white" }}
                          >
                            Coming Soon
                          </h2>
                          <p style={{ color: "white" }}>Notes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Utkarsh Code Start */}
      <section class="text-gray-600 body-font">
        <div class="container-fluid">
          <div
            id="first"
            class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
          >
            <div>
              <img class="img-fluid" src={first} alt="free study resources" />
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-[#1000ff] text-lg title-font font-medium mb-2">
                Free study resources
              </h2>
              <p class="leading-relaxed text-start">
                Download free study Notes, Previous Question Paper, Lecture
                notes and much more!
              </p>
            </div>
          </div>
          <div
            id="second"
            class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
          >
            <div
              id="second-content"
              class="flex-grow sm:text-left text-center mt-6 sm:mt-0"
            >
              <h2 class="text-[#1000ff] text-lg title-font font-medium mb-2">
                Simply the best
              </h2>
              <p class="leading-relaxed text-start">
                Can’t find your Question Paper? Ask for help and your fellow
                students will be glad to help.
              </p>
            </div>
            <div id="second-logo">
              <img class="img-fluid" src={second} alt="simply the best" />
            </div>
          </div>

          <div
            id="third"
            class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col"
          >
            <div>
              <img class="img-fluid" src={third} alt="legit" />
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-[#1000ff] text-lg title-font font-medium mb-2 ">
                Legit
              </h2>
              <p class="leading-relaxed text-start">
                All Documents are uploaded by students of your branch.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Utkarsh Code Ends for those 3 divs  */}
      <section
        class="text-gray-600 body-font"
        style={{ backgroundColor: "#Dbe6ea" }}
      >
        <div class="container px-5 py-24 mx-auto">
          <div id="demo" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button
                type="button"
                id="arrow"
                data-bs-target="#demo"
                data-bs-slide-to="0"
                class="active"
              ></button>
              <button
                type="button"
                id="arrow"
                data-bs-target="#demo"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                id="arrow"
                data-bs-target="#demo"
                data-bs-slide-to="2"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <div class="carousel-item active bg-white rounded" id="fc">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#62aec5"
                    class="inline-block w-8 h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed text-lg">
                    “I just wanted to share a quick note and let you know that
                    you guys do a really good job. I’m glad I decided to visit
                    this site before my exam. It’s really great how easy your
                    websites to find and download question paper. I never have
                    any problem at all. Now it’s almost like having a mentor
                    right here with me. I just choose the page, choose the
                    branch then year and click download. It’s so simple. Thanks,
                    guys!”
                  </p>
                  <span
                    id="blue-line"
                    class="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6"
                  ></span>
                  <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm sup">
                    Ritik Singh
                  </h2>
                  <p class="text-gray-500 sub">College Student</p>
                </div>

                <div class="carousel-item bg-white rounded" id="sc">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#62aec5"
                    class="inline-block w-8 h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed text-lg">
                    "I must say I am very impressed after visit to the
                    Bunk4Study website. The website is well presented , easy to
                    follow and engaging. I thoroughly enjoyed this website and
                    helps me a lot in exams by downloading question papers and
                    study materials. Thank you ! This is the Best Website !"
                  </p>
                  <span
                    id="blue-line"
                    class="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6"
                  ></span>
                  <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm sup">
                    Rohan
                  </h2>
                  <p class="text-gray-500 sub">College Student</p>
                </div>

                <div class="carousel-item bg-white rounded" id="tc">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#62aec5"
                    class="inline-block w-8 h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed text-lg">
                    “For students , Bunk4Study is very helpful and well
                    organized and easy for all the students to search. This
                    website is very helpful , supportive throughout in my
                    college exams. All team members really done a very good job.
                    It is easy for me to search content through only website
                    i.e. Bunk4Study. Thank you so much !”
                  </p>
                  <span
                    id="blue-line"
                    class="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6"
                  ></span>
                  <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm sup">
                    Priya
                  </h2>
                  <p class="text-gray-500 mb-4 sub">College Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
