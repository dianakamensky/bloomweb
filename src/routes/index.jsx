import { useLoaderData } from "react-router-dom";
import { getPosts, createPost } from "../../api";
import Posts from "../components/Posts/posts";

export async function loader({ params, request }) {
  const posts = await getPosts();
  return posts;
}

export async function action({ params, request }) {
  let formData = await request.formData();
  const info = Object.fromEntries(formData);
  await createPost(info);
}

export default function Index() {
  const posts = useLoaderData();

  return (
    <div className="index">
      <Posts posts={posts}></Posts>
    </div>
  );
}
