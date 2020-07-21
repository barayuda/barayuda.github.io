import React from "react";

import BackToHomepage from "../components/blog/BackToHomepage";
import Header from "../components/blog/Header";

function ResumePage({ props }) {
  return (
    <main className="container mx-auto p-5 my-8">
      <div className="grid gap-20">
        <BackToHomepage />

        <Header />

        {props.data.items.map(post => 
          <div className="w-full px-4 md:px-6 text-xl text-grey-darkest leading-normal">
            <div className="font-sans">
              <h2 className="font-sans break-normal text-black pt-6 pb-2 text-3xl md:text-4xl hover:underline">
                <a href={post.url} rel="follow" target="_blank">{post.title}</a>
              </h2>
              <p className="text-sm md:text-base font-normal text-grey-dark">
                <span className="text-sm">Dipublikasikan pada <span className="underline">{ new Date(post.published).toString() }</span> oleh <strong>{ post.author.displayName }</strong>.</span>
              </p>
            </div>
            <div className="py-6" dangerouslySetInnerHTML={{
              __html: post.content
            }}></div>
            <a href={post.url} className="bg-transparent border border-grey hover:border-green-700 text-xs text-grey hover:text-green-700 font-bold py-2 px-4 rounded-full">Selengkapnya &#8594;</a>
            <hr className="border-b-2 border-grey-light mb-8 mx-4" />
          </div>
        )}

        <BackToHomepage />
      </div>
    </main>
  );
}

ResumePage.getInitialProps = async (ctx) => {
  const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/2749505002352165548/posts?key=AIzaSyBgRIFZyxaS1q2BMHoofB9SQP93z_SHzKs`)
  const data = await res.json()
  return {
    props: {
      data
    },
  }
}

export default ResumePage;
