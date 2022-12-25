import React from "react";
import { getCurrentUser, withCommas } from "../utils";
import Comment from "./comment";
import { useFetcher } from "react-router-dom";
import SaveButton from "./savebutton";
import api from "../api";

export default function PostPopup({ post, onClose }) {
  const currentUserId = getCurrentUser();
  const popupEl = React.useRef(null);
  const imgEl = React.useRef(null);
  const fetcher = useFetcher();
  const [currentPost, setCurrentPost] = React.useState(post);

  React.useEffect(() => {
    async function updatePost() {
      setCurrentPost((await api.getPost(post._id)).data);
    }
    updatePost();
  }, [fetcher]);

  React.useEffect(() => {
    popupEl.current.style.height = `${imgEl.current.clientHeight}px`;
  }, []);

  let date = new Date(post.date);
  date = date.toLocaleDateString();

  return (
    <div className="popup popup_open">
      <div className="postpopup" ref={popupEl}>
        {currentUserId != post.ownerId && <SaveButton postId={post._id} />}
        <button className="popup__close-btn" onClick={onClose}></button>
        <div className="postpopup__main">
          <img className="postpopup__img" src={post.image} ref={imgEl} />
        </div>
        <div className="postpopup__sidebar">
          <div className="postpopup__sidebar-info">
            <Comment
              userId={post.ownerId}
              content={withCommas([post.flower, post.location, date])}
            ></Comment>
          </div>
          <div className="comments">
            {currentPost?.comments?.map((comment) => (
              <Comment
                key={comment._id}
                userId={comment.ownerId}
                content={comment.content}
              ></Comment>
            ))}
          </div>
          <fetcher.Form
            className="commentform"
            method="post"
            action={`/${currentPost._id}/comment`}
          >
            <input
              className="commentform__input"
              placeholder="Leave a comment..."
              name="comment"
            ></input>
            <button className="commentform__submit" type="submit">
              Post
            </button>
          </fetcher.Form>
        </div>
      </div>
    </div>
  );
}
