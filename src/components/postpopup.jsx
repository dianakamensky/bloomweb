import React from "react";
import { postComment } from "../api";
import Comment from "./comment";
import CommentForm from "./commentform";
import SaveButton from "./savebutton";
import { CurrentUserContext } from "../routes/root";

export default function PostPopup({ post, onClose, comments }) {
  const currentUser = React.useContext(CurrentUserContext);
    const popupEl = React.useRef(null);
    const imgEl = React.useRef(null);

React.useEffect(() => {popupEl.current.style.height = `${imgEl.current.clientHeight}px`}, []);
  return (
    <div className="popup popup_open">
      <div className="postpopup" ref={popupEl}>
      {currentUser && currentUser.id != post.ownerId &&
           <SaveButton postId={post.id}/>}
        <button className="popup__close-btn" onClick={onClose}></button>
        <div className="postpopup__main">
          <img className="postpopup__img" src={post.image} ref={imgEl}/>
   
        </div>
        <div className="postpopup__sidebar">
            <div className="postpopup__sidebar-info">
          <Comment
            userId={post.ownerId}
            content={`${post.flower}, ${post.location}, ${post.date.toDateString()}`}
          ></Comment>
  
</div>
          <div className="comments">
            {comments.map((comment) => (
              <Comment key={comment.id} userId={comment.ownerId} content={comment.content}></Comment>
            ))}
          </div>
          <CommentForm postId={post.id}></CommentForm>
        </div>
      </div>
    </div>
  );
}
