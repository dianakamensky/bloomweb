import React from "react";
import DeleteButton from "./deletebutton";
import { getCurrentUser } from "../utils";
import api from "../api";

export default function Post({post, setCurrentPost}) {
  const currentUserId = getCurrentUser();
  async function openPopup() {
    // const thisPost = await api.getPost(post._id);
    setCurrentPost(post);
  }


  return (
    <>
    <div className="post" >
      <img className="post__image" src={post.image} onClick={openPopup}></img>
      {currentUserId === post.owner && <DeleteButton postId={post._id}/>}
    </div>
    
    </>
  );
}
