import React from 'react';

const Header = ({ headings, site }) => (
  <header className="text-right dont-page-break">
    {headings && (
      <>
        <h1 className="text-5xl font-bold leading-none tracking-tighter">Bara Blog</h1>
        <h2 className="text-3xl font-medium text-gray-700">
          <div className="inline-block">(Software Engineering Note)</div>
        </h2>
      </>
    )}

    {site && (
      <p className="text-base">
        <a target="_blank" rel="noreferrer" href="https://blog.barayuda.web.id" className="link">
          blog.barayuda.web.id
        </a>
      </p>
    )}
  </header>
);

Header.defaultProps = {
  headings: {},
  site: true
};

export default Header;
