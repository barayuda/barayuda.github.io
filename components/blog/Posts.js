import React from "react";

function Posts({ publishDate, summary, image, title }) {
  let { file, description } = image;
  return (
    <div className="post">
      <img
        alt={description}
        src={`https:${file.url}?fit=thumb&f=center&h=200&w=200&fm=webp`}
        width="200"
        height="200"
      />
      <div className="post-body">
        <h2>{title}</h2>
        <h3>{publishDate.substring(0, 10)}</h3>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}

export default Posts;
