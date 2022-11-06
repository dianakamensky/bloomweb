export default function Post({post}) {
  return (
    <div>
      <img src={post.image}></img>
      <p>{post.date}</p>
      <p>{post.location}</p>
      <p>{post.flower}</p>
    </div>
  );
}
