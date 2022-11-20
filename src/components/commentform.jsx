

export default function CommentForm() {
  return (
    <form className="commentform">
      <input
        className="commentform__input"
        placeholder="Leave a comment..."
      ></input>
      <button className="commentform__submit" type="submit">Post</button>
    </form>
  );
}
