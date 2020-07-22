import React from "react";

import Picture from "../components/profile/Picture";
import MainSocial from "../components/profile/MainSocial";
import Hr from "../components/profile/Hr";
import Header from "../components/profile/Header";
import Social from "../components/profile/Social";
import Projects from "../components/profile/Projects";
import Blogs from "../components/blog/Blogs";

function HomePage() {
  return (
    <main className="container mx-auto p-5 my-8">
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-4 md:col-span-1">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
            <Picture />
            <div>
              <MainSocial />
            </div>
          </div>
        </div>

        <div className="col-span-4 md:col-span-3">
          <Header />

          <Hr />

          <Projects />

          <Hr />

          <Blogs />

          <Hr />

          <Social />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
