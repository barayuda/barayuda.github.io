import React from "react";

import SectionTitle from "../resume/SectionTitle";

const Experience = ({ children, title, href, company, where, when }) => (
  <li className="mb-5 dont-page-break">
    <div>
      <h5 className="font-medium">{title}</h5>
      <p className="small">
        <a href={href} target="_blank" rel="noopener" className="link mr-1">
          {company}
        </a>
        - {where} | {when}
      </p>
      <p>{children}</p>
    </div>
  </li>
);

const Professional = () => (
  <section>
    <SectionTitle>Professional Experience</SectionTitle>

    <ul className="list-disc list-outside">
      <Experience
        company="DANA Indonesia"
        href="https://dana.id/"
        title="Software Developer Engineer"
        where="Jakarta, Indonesia (Remote)"
        when="Sept, 2020 - Currently"
      >
        Joined in tech team, colaborate to build Indonesia Cashless Society.
      </Experience>
    </ul>
  </section>
);

export default Professional;
