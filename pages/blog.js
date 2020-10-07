import React from "react";

import BackToHomepage from "../components/blog/BackToHomepage";
import Header from "../components/blog/Header";

function BlogsPage() {
  return (
    <main className="container mx-auto p-5 my-8">
      <div className="grid gap-20">
        <BackToHomepage />

        <Header />

        <BackToHomepage />
      </div>
    </main>
  );
}

export default BlogsPage;
