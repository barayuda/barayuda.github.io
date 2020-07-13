import React from "react";

const Headings = ({ name, title, description }) => (
  <>
    {name && <h1 className="text-5xl font-bold leading-none tracking-tighter">Barayuda Gautama</h1>}

    {title && (
      <h2 className="text-3xl font-medium text-gray-700">
        <div className="inline-block">SDE,&nbsp;</div>
        <div className="inline-block">Software Engineer.</div>
      </h2>
    )}

    {description && <h3 className="text-base mb-5">Colaboration to fast deliveries with real value.</h3>}
  </>
);

Headings.defaultProps = {
  name: true,
  title: true,
  description: true,
};

export default Headings;
