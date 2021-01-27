import React from "react";

import Headings from "../profile/Headings";

const Header = ({ headings, site, github, linkedin, location, email }) => (
  <header className="text-right dont-page-break">
    <Headings {...headings} />

    {site && (
      <p className="text-base">
        <a target="_blank" rel="noreferrer" href="https://barayuda.web.id" className="link">
          barayuda.web.id
        </a>
      </p>
    )}

    {github && (
      <p className="text-base">
        <a target="_blank" rel="noreferrer" href="https://github.com/barayuda" className="link">
          github.com/barayuda
        </a>
      </p>
    )}

    {linkedin && (
      <p className="text-base">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/barayuda"
          className="link">
          linkedin.com/in/barayuda
        </a>
      </p>
    )}

    {location && <p className="text-muted text-base">Bali, Indonesia (GMT+8)</p>}

    {email && <p className="text-muted text-base">gede@barayuda.web.id</p>}
  </header>
);

Header.defaultProps = {
  headings: {},
  site: true,
  github: true,
  linkedin: true,
  location: true,
  phone: true,
  email: true,
};

export default Header;
