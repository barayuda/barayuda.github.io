import React from "react";

import SectionTitle from "./SectionTitle";

const Project = ({ children, name, href, icon }) => (
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

const Projects = () => (
  <section>
    <SectionTitle>Projects</SectionTitle>

    <Project
      name="text2speech-timer-app"
      href="https://github.com/barayuda/text2speech-timer-app"
      icon={<i className="fas fa-fw mr-1 fa-atom"></i>}
    >
      Fun project with electron and vue
    </Project>

    <Project
      name="e2e-test-playground"
      href="https://github.com/barayuda/e2e-test-playground"
      icon={<i className="fab fa-fw mr-2 fa-vuejs"></i>}
    >
      E2E Testing with Team-friendly Reports
    </Project>

    <p>
      <i className="fas fa-fw mr-1 fa-hourglass-half"></i>
      Fun project adding more soon...
    </p>
  </section>
);

export default Projects;
