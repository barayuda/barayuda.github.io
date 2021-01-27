import React from "react";

import SectionTitle from "../resume/SectionTitle";

const School = ({ children, name, href, where, when }) => (
  <div className="mb-2">
    <a href={href} target="_blank" rel="noreferrer" className="link mr-1">
      {name}
    </a>

    <p className="small">
      {where} | {when}
    </p>

    {children && <p className="small">{children}</p>}
  </div>
);

const Degree = ({ children, title }) => (
  <li className="mb-5 dont-page-break">
    <div>
      <h5 className="font-medium">{title}</h5>
      {children}
    </div>
  </li>
);

const Education = () => (
  <section>
    <SectionTitle>Academic Education</SectionTitle>

    <ul className="list-disc list-outside">
      <Degree title="Magister's Degree">
        <School
          name="Udayana University"
          href="https://www.unud.ac.id"
          where="Denpasar, Indonesia"
          when="Currently">
          Management of Information System and Computer
        </School>
      </Degree>

      <Degree title="Bachelor of Computer Science">
        <School
          name="STMIK STIKOM Indonesia"
          href="#"
          where="Denpasar, Indonesia"
          when="2011 - 2015"
        />
      </Degree>
    </ul>
  </section>
);

export default Education;
