import React from "react";

import SectionTitle from "../profile/SectionTitle";

// eslint-disable-next-line no-unused-vars
const Blog = ({ children, name, href, icon }) => (
  <p className="mb-2 md:mb-0">
    <div className="inline-block">
      {icon}
      <a target="_blank" rel="noreferrer" href={href} className="link">
        {name}
      </a>
      ,&nbsp;
    </div>

    <div className="inline-block">{children}.</div>
  </p>
);

const Blogs = () => (
  <section>
    <SectionTitle>Blog</SectionTitle>

    <p>
      <i className="fas fa-fw mr-1 fa-hourglass-half"></i>
      Read more in{" "}
      <a href="/blog" className="link" rel="noreferrer" target="_blank">
        My Blog
      </a>
    </p>
  </section>
);

export default Blogs;
