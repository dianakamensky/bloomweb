import { useLoaderData } from "react-router-dom";
import Posts from "../components/posts";
import api from "../api";

export async function loader() {
  const posts = await api.getUserPosts();
  return posts.posts;
}

export default function MyPosts() {
  const posts = useLoaderData();
  return <Posts posts={posts}></Posts>;
}
