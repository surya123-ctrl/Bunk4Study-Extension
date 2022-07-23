import React from "react";
import { Helmet } from "react-helmet";
import ReactReadMoreReadLess from "react-read-more-read-less";
import "../MyComponents/style/Blog.css";
const About = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }} className="box">
      <Helmet>
        <title>Blog - Bunk4Study</title>
        <meta
          name="description"
          content="Blogs related to university prepration"
        />
      </Helmet>

      <h1 className="heading">Our Blogs</h1>

      <div className="blog-buttons">
        <a
          href="https://medium.com/@bunk4study/bunk4study-8f9e8579f06f"
          target="_blank"
          rel="noreferrer"
        >
          <button className="medium button">
            <img
              src="https://i.imgur.com/dI94U4Q.png"
              alt=""
              className="medium-pic"
            />
            Medium
          </button>
        </a>
        <a
          href="https://bunk4study.blogspot.com/2022/06/bunk4study.html"
          target="_blank"
          rel="noreferrer"
        >
          <button className="blogger button">
            <img
              src="https://i.imgur.com/o7MljYL.png"
              alt=""
              className="blog-pic"
            />
            Blogger
          </button>
        </a>
      </div>
      <article>
        <ReactReadMoreReadLess
          charLimit={500}
          readMoreText={"Read more..."}
          readLessText={"Read less..."}
        >
          {
            "Bunk4Study is commonly named as Bunk for Study. For avoidance of study , Students bunk the classes in school days so to maintain the decorum of students i.e. for study of placements and student’s study in the class don’t be affected , Bunk4Study site is there. Students bunk the classes and side by side their college study don’t be loss, all the things will get smoother either their college study as well as placements. Students focus on their placements and if students bunk their classes, they will not get disappointed because Bunk4Study is here. We started Bunk4Study because in college everyone has to focus on extra study to get placement not on syllabus. But to take degree from college student have to pass semester exams as we are also college student and also face the same problem. After year of experience we came through the result that to prepare for semester one night before the exam the best way to is to go through previous year paper. Now problem arises it is very hectic work time taking to find previous year paper from library and asking seniors. That’s why we are here for you to support you to find previous year paper in single click for different colleges without any hard work. Along the way we are also working on different branches like notes, study courses and many different sectors but right now we are focusing on Question Paper for different branches. We want to be your last night study mentor who helps you in passing semester exams and you can focus on your placement studies without any fear of back in semester exams. Bunk4Study is very useful in day to day life. It helps students to find question papers of every stream and year. Students do not go here and there to find question papers of different branches and year. He/she can find question paper of every college in which they study and get better score. Bunk4Study covers all the education material in one online platform and it is easy for students to find all things in one website. Through this every student can do good score in every subject. In Bunk4Study , all the MDU Question Papers are available , students can visit this website and download it , get all previous year question papers and get study well for placements also.In Future Bunk4Study takes a high step which comes many benefits for all the students whether in India or outside India. Bunk4Study helps Indian as well as International students in all the ways. In Today Scenario, Bunk4Study provide previous year question papers for MDU student only but in future it provides question papers to each and every student of any college, whether he/she is a MDU student or any other institution. Bunk4Study helps in providing Notes, Study material, Question Papers and all relevant and sufficient material in every aspect in future and make his best to do all the things better than today. Students get benefits in Bunk4Study in various aspects. He/she can find all the Question papers of every branch, year and every college in Bunk4Study. All students download the question papers, notes and study material in this website. It is helpful for those students who don’t give much time in college studies and take more time placements will get more benefits in examinations. Every student pass in exam with good marks and he/she don’t spend much time in finding the question paper on different sites rather than all can find study materials in Bunk4Study . So all can get benefits in Bunk4Study. "
          }
        </ReactReadMoreReadLess>
      </article>
      <br />
    </div>
  );
};

export default About;
