import React from "react";
import { v4 as uuidv4 } from "uuid";

import BackToHomepage from "../components/blog/BackToHomepage";
import Header from "../components/blog/Header";
import Posts from "../components/blog/Posts";
import { fetchEntries, postType } from "../utils/contentfulPosts";

function BlogsPage({ posts }) {
  return (
    <main className="container mx-auto p-5 my-8">
      <div className="grid gap-20">
        <BackToHomepage />

        <Header />

        <div className="posts">
          {posts.map((data) => {
            if (data.posts.publishDate && data.postType === postType) {
              return (
                <Posts
                  key={uuidv4()}
                  publishDate={data.posts.publishDate}
                  summary={data.posts.description}
                  body={data.posts.body}
                  image={data.posts.image.fields}
                  title={data.posts.title}
                />
              );
            }
          })}
        </div>

        <BackToHomepage />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = res.map((p) => {
    return {
      posts: p.fields,
      postType: p.sys.contentType.sys.id,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default BlogsPage;
