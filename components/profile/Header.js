import React from "react";

import Headings from "./Headings";

const Header = () => (
  <header>
    <Headings />

    <p>
      <div className="inline-block">
        <i className="fab fa-fw mr-2 fa-laravel text-red-500"></i>
        <i className="fab fa-fw mr-2 fa-vuejs text-green-700"></i>
        <i className="far fa-fw mr-2 fa-lightbulb text-orange-500"></i>
      </div>

      <div className="inline-block">Mostly focused on Laravel, Vue and Product.</div>
    </p>

    <p>
      <div className="inline-block">
        <i className="fab fa-fw mr-2 fa-react text-blue-500"></i>
        <i className="fab fa-fw mr-2 fa-docker text-blue-600"></i>
        <i className="far fa-fw mr-2 fa-user-circle text-gray-600"></i>
      </div>

      <div className="inline-block">Also a React, DevOps and UX enthusiast.</div>
    </p>
  </header>
);

export default Header;
