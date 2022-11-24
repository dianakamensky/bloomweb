import { useFetcher } from "react-router-dom";
import { postComment } from "../api";

export default function CommentForm({postId}) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form className="commentform" method="post" action={`/${postId}/comment`}>
      <input
        className="commentform__input"
        placeholder="Leave a comment..."
        name="comment"
      ></input>
      <button className="commentform__submit" type="submit">Post</button>
    </fetcher.Form>
  );
}



