import dayjs from "dayjs";
import React from "react";

function Posts({ postAuthor, postImage, postPublishDate, postSummary, postTags, postTitle }) {
  return (
    <div className="post">
      <div className="md:flex bg-white rounded-lg p-6">
        <img
          alt={postImage.description}
          className="h-40 w-40 md:h-36 md:w-36 rounded-full mx-auto md:mx-0 md:mr-6"
          src={`https:${postImage.file.url}?fit=thumb&f=center&h=200&w=200&fm=webp`}
        />
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-3xl">{postTitle}</h2>
          <div className="text-gray-700">
            <span className="text-xs md:text-sm">
              Posted by <span className="font-semibold">{postAuthor.name}</span> at{" "}
              {dayjs(postPublishDate).format("dddd, MMMM D, YYYY h:mm A")}
            </span>
          </div>
          <div className="text-gray-600">
            <span className="text-xs md:text-sm">Tag(s): {postTags}</span>
          </div>
          <p className="summary">{postSummary}</p>
        </div>
      </div>
    </div>
  );
}

export default Posts;
