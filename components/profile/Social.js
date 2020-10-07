import React from "react";
import Link from "next/link";

import SectionTitle from "./SectionTitle";

const Social = () => (
  <section>
    <SectionTitle>More about me</SectionTitle>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <p>
        <i className="fab fa-fw mr-1 fa-github"></i>
        <a target="_blank" rel="noopener" href="https://github.com/barayuda" className="link">
          GitHub
        </a>
      </p>

      <p>
        <i className="fab fa-fw mr-1 fa-linkedin"></i>
        <a target="_blank" rel="noopener" href="https://linkedin.com/in/barayuda" className="link">
          LinkedIn
        </a>
      </p>

      {/* <p>
        <i className="fab fa-fw mr-1 fa-twitter"></i>
        <a target="_blank" rel="noopener" href="https://twitter.com/barayuda" className="link">
          Twitter
        </a>
      </p> */}
    </div>
  </section>
);

export default Social;
