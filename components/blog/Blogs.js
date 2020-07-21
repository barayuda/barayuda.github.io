import React from "react";

import SectionTitle from "../profile/SectionTitle";

const Blog = ({ children, name, href, icon }) => (
  <p className="mb-2 md:mb-0">
    <div className="inline-block">
      {icon}
      <a target="_blank" rel="noopener" href={href} className="link">
        {name}
      </a>
      ,&nbsp;
    </div>

    <div className="inline-block">{children}.</div>
  </p>
);

const Blogs = () => (
  <section>
    <SectionTitle>Blog (in Bahasa)</SectionTitle>

    <Blog
      name="text2speech-timer-app"
      href="https://github.com/barayuda/text2speech-timer-app"
      icon={<i className="fas fa-fw mr-1 fa-edit"></i>}
    >
      Fun Blog with electron and vue
    </Blog>


    <p>
      <i className="fas fa-fw mr-1 fa-hourglass-half"></i>
      Read more in <a href="/blog" className="link">Blog...</a>
    </p>
  </section>
);

export default Blogs;
