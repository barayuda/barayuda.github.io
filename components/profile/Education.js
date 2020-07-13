import React from "react";

const School = ({ children, href, name, detail }) => (
  <p className="mb-2 md:mb-0">
    <div className="inline-block mr-1">{children}</div>
    <div className="inline-block">
      <a target="_blank" rel="noopener" href={href} className="link">
        {name}
      </a>
      <em className="small text-muted ml-1">({detail})</em>
    </div>
  </p>
);

const Education = () => (
  <section>
    <School name="Udayana University" href="http://www.unud.ac.id/" detail="Denpasar, Bali">
      Master's degree on Management of Information System and Computer from
    </School>
    <School name="STMIK STIKOM Indonesia" href="#" detail="Denpasar, Bali">
      Spent 4 years studying at
    </School>
  </section>
);

export default Education;
