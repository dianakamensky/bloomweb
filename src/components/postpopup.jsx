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
  const [commentInput, setCommentInput] = React.useState("");

  function handleCommentInputChange(e) {
    setCommentInput(e.target.value);
  }

  function handleCommentSubmit(e) {
    setCommentInput("");
  }

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
        {currentUserId != post.owner && <SaveButton postId={post._id} user={currentUserId} />}
        <button className="popup__close-btn" onClick={onClose}>
        <i class="fa-solid fa-xmark"></i>
        </button>
        <div className="postpopup__main">
          <img className="postpopup__img" src={post.image} ref={imgEl} />
        </div>
        <div className="postpopup__sidebar">
          <div className="postpopup__sidebar-info">
            <Comment
              userId={post.owner}
              content={withCommas([post.flower, post.location, date])}
            ></Comment>
          </div>
          <div className="comments">
            {currentPost?.comments?.map((comment) => (
              <Comment
                key={comment._id}
                userId={comment.owner}
                content={comment.content}
              ></Comment>
            ))}
          </div>
          <fetcher.Form
            className="commentform"
            method="post"
            action={`/${currentPost._id}/comment`}
            onSubmit={handleCommentSubmit}
          >
            <input
              className="commentform__input"
              placeholder={currentUserId ? "Leave a comment..." : "Sign in to post comments"}
              name="comment"
              value={commentInput}
              onChange={handleCommentInputChange}
            ></input>
            <button disabled={commentInput === ""} className="commentform__submit" type="submit">
              Post
            </button>
          </fetcher.Form>
        </div>
      </div>
    </div>
  );
}
