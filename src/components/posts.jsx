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
      <div className="posts__images">
        {posts.map((post) => (
          <Post
            post={post}
            key={post.id}
            setCurrentPost={setCurrentPost}
          ></Post>
        ))}
      </div>
      {currentPost && (
        <PostPopup
          post={currentPost}
          onClose={onClose}
          comments={currentPost.comments}
        ></PostPopup>
      )}
    </div>
  );
}
