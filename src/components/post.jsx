

export default function Post({post, setCurrentPost}) {

  function openPopup() {
    setCurrentPost(post);
  }


  return (
    <div className="post" onClick={openPopup}>
      <img className="post__image" src={post.image}></img>
    </div>
  );
}
