import React from "react";

import SectionTitle from "./SectionTitle";

const Social = () => (
  <section>
    <SectionTitle>More about me</SectionTitle>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <p>
        <i className="fab fa-fw mr-1 fa-github"></i>
        <a target="_blank" rel="noreferrer" href="https://github.com/barayuda" className="link">
          GitHub
        </a>
      </p>

      <p>
        <i className="fab fa-fw mr-1 fa-linkedin"></i>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/barayuda"
          className="link">
          LinkedIn
        </a>
      </p>
    </div>
  </section>
);

export default Social;
