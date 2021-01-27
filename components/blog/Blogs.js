import React from "react";

import SectionTitle from "../profile/SectionTitle";

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
