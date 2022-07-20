import React from "react";
import { Helmet } from "react-helmet";
import ReactReadMoreReadLess from "react-read-more-read-less";
import "../MyComponents/style/Blog.css";
const About = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }} className="box">
      <h1 className="heading">Our Blogs</h1>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Blogs related to university prepration" />
      </Helmet>
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
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam eaque unde iure architecto corrupti nihil quo facere, autem magnam necessitatibus nulla, reiciendis voluptatem hic nobis? Quod, porro ex. Mollitia assumenda adipisci hic asperiores. Cumque porro debitis qui provident rem ut nobis vitae hic magnam libero beatae mollitia cupiditate ipsa, doloremque nam corporis impedit facere aut harum facilis illum ex molestiae nesciunt ipsam! Saepe maxime quos esse velit voluptas, nulla, dolorem tempora magni nemo non praesentium libero quod blanditiis nihil soluta ad veritatis distinctio qui possimus natus, est officiis ipsa reprehenderit nobis. Porro magnam nesciunt nulla veniam inventore, laboriosam minima, eveniet similique repellat facilis fugit minus odit perspiciatis soluta? Numquam iusto itaque quis, eaque laborum voluptatem qui cupiditate consequuntur? Nam voluptas nihil architecto quod alias! Exercitationem in assumenda maiores quod ad labore qui, voluptatibus veritatis voluptatum inventore praesentium ipsum possimus nostrum, eveniet provident nihil iure quae voluptate maxime velit illum. Excepturi nemo quis est dicta ea id aliquam. Eius velit quod officiis asperiores! Perspiciatis, accusamus. Veniam tempora tempore nam quos eveniet eaque dolorum impedit perferendis officia harum. Iure pariatur impedit rerum optio reiciendis ex exercitationem quisquam cumque eos, iste illo doloribus, saepe nobis mollitia recusandae placeat ipsa nemo? Architecto, dolorem exercitationem.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam eaque unde iure architecto corrupti nihil quo facere, autem magnam necessitatibus nulla, reiciendis voluptatem hic nobis? Quod, porro ex. Mollitia assumenda adipisci hic asperiores. Cumque porro debitis qui provident rem ut nobis vitae hic magnam libero beatae mollitia cupiditate ipsa, doloremque nam corporis impedit facere aut harum facilis illum ex molestiae nesciunt ipsam! Saepe maxime quos esse velit voluptas, nulla, dolorem tempora magni nemo non praesentium libero quod blanditiis nihil soluta ad veritatis distinctio qui possimus natus, est officiis ipsa reprehenderit nobis. Porro magnam nesciunt nulla veniam inventore, laboriosam minima, eveniet similique repellat facilis fugit minus odit perspiciatis soluta? Numquam iusto itaque quis, eaque laborum voluptatem qui cupiditate consequuntur? Nam voluptas nihil architecto quod alias! Exercitationem in assumenda maiores quod ad labore qui, voluptatibus veritatis voluptatum inventore praesentium ipsum possimus nostrum, eveniet provident nihil iure quae voluptate maxime velit illum. Excepturi nemo quis est dicta ea id aliquam. Eius velit quod officiis asperiores! Perspiciatis, accusamus. Veniam tempora tempore nam quos eveniet eaque dolorum impedit perferendis officia harum. Iure pariatur impedit rerum optio reiciendis ex exercitationem quisquam cumque eos, iste illo doloribus, saepe nobis mollitia recusandae placeat ipsa nemo? Architecto, dolorem exercitationem."
          }
        </ReactReadMoreReadLess>
      </article>
      <br />
    </div>
  );
};

export default About;
