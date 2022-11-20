import React from "react";
import Comment from "./comment";
import CommentForm from "./commentform";

export default function PostPopup({ post, onClose, comments }) {
    const popupEl = React.useRef(null);
    const imgEl = React.useRef(null);
React.useEffect(() => {popupEl.current.style.height = `${imgEl.current.clientHeight}px`}, []);
  return (
    <div className="popup popup_open">
      <div className="postpopup" ref={popupEl}>
        <button className="popup__close-btn" onClick={onClose}></button>
        <div className="postpopup__main">
          <img className="postpopup__img" src={post.image} ref={imgEl}/>
   
        </div>
        <div className="postpopup__sidebar">
            <div className="postpopup__sidebar-info">
          <Comment
            userId={post.ownerId}
            content={`${post.flower}, ${post.location}, ${post.date}`}
          ></Comment>
           <div className="postpopup__sidebar-actions">
              <button className="postpopup__btn"></button>
            </div>
</div>
          <div className="comments">
            {comments.map((comment) => (
              <Comment userId={comment.ownerId} content={comment.content}></Comment>
            ))}
          </div>
          <CommentForm></CommentForm>
        </div>
      </div>
    </div>
  );
}
