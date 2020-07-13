import React from "react";

import SectionTitle from "./SectionTitle";

const Interests = () => (
  <section className="dont-page-break">
    <SectionTitle>Other Interests</SectionTitle>

    <ul className="list-disc list-outside">
      <li>Elixir, TypeScript, React Native, Electron</li>
      <li>Serverless, Docker, DevOps</li>
      <li>UX, Product Management</li>
      <li>Podcasts, coffee, long walks</li>
    </ul>
  </section>
);

export default Interests;
