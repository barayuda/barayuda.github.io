import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="Barayuda Gautama" />
      </Link>
      <header>
        <h2>Barayuda</h2>
        <p><a href="https://id.linkedin.com/in/barayuda">id.linkedin.com/in/barayuda</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Bara <span role="img" aria-label="glasses smiley">😎</span>. I like building things.
      Thank you for visiting my website. For a while this website is being updated and comes with
      a CRM system. If you have any questions about making awesome website or app.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      <p className="copyright">Barayuda.Web.id &copy; 2019 <Link to="/">Barayuda Gautama</Link>.</p>
    </section>
  </section>
);

export default Nav;
