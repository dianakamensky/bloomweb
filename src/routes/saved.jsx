import { useLoaderData } from "react-router-dom";
import Posts from "../components/posts";
import api from "../api";

export async function loader() {
  const posts = await api.getSavedPosts();
  return posts.savedPosts;
}

export default function Saved() {
  const posts = useLoaderData();
  return <Posts posts={posts}></Posts>;
}
