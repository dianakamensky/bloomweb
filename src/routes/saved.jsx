import { useLoaderData } from "react-router-dom";
import Posts from "../components/posts";
import React from "react";
import { SavedPostsContext } from "../routes/root";

export default function Saved() {
  const savedPosts = React.useContext(SavedPostsContext);
  return <Posts posts={savedPosts}></Posts>;
}
