import React from "react";

import SectionTitle from "../resume/SectionTitle";

const Experience = ({ children, title, href, company, where, when }) => (
  <li className="mb-5 dont-page-break">
    <div>
      <h5 className="font-medium">{title}</h5>
      <p className="small">
        <a href={href} target="_blank" rel="nofollow" className="link mr-1">
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
        when="Sept, 2019 - Present"
      >
        Joined in tech team, colaborate to build Indonesia Cashless Society.
      </Experience>

      <Experience
        company="Ogilvy Australia"
        href="https://www.ogilvy.com.au/"
        title="Front-end Engineer"
        where="Bali, Indonesia (Remote Office)"
        when="Jun, 2017 - Aug, 2019"
      >
        Australian branch of Ogilvy, A major global advertising company, clients including BMW, Cocacola, IBM, AMEX, etc.<br/>
        <br/><span style={{ textDecoration: 'underline' }}>What I do:</span><br/>
        • Software development for digital advertising campaign including Web Banner, landing page, interactive advertising, etc (HTML5, CSS, GreenSock Javascript).<br/>
        • Build Banners Preview with PHP and Bootstrap 3<br/>
        • EDM Templates (Build email HTML, working with Litmus environment)<br/>
        • Drupal 8 (Focus on templating with Bootstrap, Webpack, jQuery, and Vue)<br/>
        • Xamarin.Forms (Focus on XAML)<br/>
        • Build API with NodeJS and Firebase Environment (for outsourcing project)<br/>
      </Experience>
    </ul>
  </section>
);

export default Professional;
