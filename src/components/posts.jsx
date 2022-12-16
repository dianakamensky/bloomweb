import Post from "./post";
import PostPopup from "./postpopup";
import React from "react";

export default function Posts({ posts }) {
  const [currentPost, setCurrentPost] = React.useState(null);
  function onClose() {
    setCurrentPost(null);
  }
  return (
    <div className="posts">
        {posts.map((post) => (
          <Post
            post={post}
            key={post._id}
            setCurrentPost={setCurrentPost}
          ></Post>
        ))}
      {currentPost && (
        <PostPopup
          post={currentPost}
          onClose={onClose}
        ></PostPopup>
      )}
    </div>
  );
}
