import React from "react";
import "../MyComponents/style/Privacy.css";
const Privacy = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <section className="privacy">
        <h1 className="heads">Disclaimer</h1>
        <p>
          Be sure to read our privacy policy & disclaimer before engaging with
          any content available on this website. If you require any more
          information or have any questions about our site’s disclaimer or
          privacy please feel free to contact us by email at
          <a href="mailto:Bunk4Study@gmail.com" className="mail">
            {" "}
            Bunk4Study@gmail.com
          </a>
        </p>
        <h1 className="heads">
          Disclaimers for{" "}
          <a href="www.Bunk4Study.com" target="_blank" className="mail">
            www.Bunk4Study.com
          </a>
        </h1>
        <p>
          All the information on this website –{" "}
          <a href="https://www.Bunk4Study.com" className="mail">
            https://www.Bunk4Study.com
          </a>{" "}
          – is published in good faith, education and for general information
          purpose only. www.Bunk4Study.com does not make any warranties about
          the completeness, reliability and accuracy of this information. Any
          action you take upon the information you find on this website
          (www.Bunk4Study.com), is strictly at your own risk. www.Bunk4Study.com
          will not be liable for any losses and/or damages in connection with
          the use of our website.
          <br></br>
          <b>
            Attention Please : This is not an official website of any
            university. We don’t take any liability for paper management, paper
            correctness, syllabus changes or any other things.
          </b>
        </p>
        <h1 className="heads">Copyright Disclaimer</h1>
        <p>
          Any redistribution or reproduction of any part or all of the contents
          in any form is prohibited other than the following : This website is
          designed only for help to students providing Study material for
          exams.You may print or download data to a local hard disk extracts for
          your personal and non-commercial use only. You may copy the content to
          individual third parties for their personal use, but only if you
          acknowledge the website as the source of the material.
        </p>
        <h1 className="heads">Consent</h1>
        <p>
          By using our website, you hereby consent to our Privacy Policy,
          disclaimer and agree to its terms.
        </p>
        <h1 className="heads">Update</h1>
        <p className="mb-0 pb-4">
          When we update or make any changes to our privacy, those changes will
          be prominently posted here.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
