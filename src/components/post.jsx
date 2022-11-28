import { CurrentUserContext } from "../routes/root";
import React from "react";
import DeleteButton from "./deletebutton";

export default function Post({post, setCurrentPost}) {
  const currentUser = React.useContext(CurrentUserContext);
  function openPopup() {
    setCurrentPost(post);
  }


  return (
    <>
    <div className="post" >
      <img className="post__image" src={post.image} onClick={openPopup}></img>
      {currentUser && currentUser.id === post.ownerId && <DeleteButton postId={post.id}/>}
    </div>
    
    </>
  );
}
