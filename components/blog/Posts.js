import React from "react";

function Posts({ publishDate, summary, image, title }) {
  let { file, description } = image;
  return (
    <div className="post">
      <img alt={description} src={`https:${file.url}?w=500`} />
      <div className="post-body">
        <h2>{title}</h2>
        <h3>{publishDate.substring(0, 10)}</h3>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}

export default Posts;
