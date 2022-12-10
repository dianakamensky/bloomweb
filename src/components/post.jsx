import React from "react";
import DeleteButton from "./deletebutton";
import { getCurrentUser } from "../utils";

export default function Post({post, setCurrentPost}) {
  const currentUserId = getCurrentUser();
  function openPopup() {
    setCurrentPost(post);
  }


  return (
    <>
    <div className="post" >
      <img className="post__image" src={post.image} onClick={openPopup}></img>
      {currentUserId === post.ownerId && <DeleteButton postId={post._id}/>}
    </div>
    
    </>
  );
}
