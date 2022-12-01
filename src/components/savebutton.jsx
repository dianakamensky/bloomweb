import { useFetcher } from "react-router-dom";
import React from "react";
import { getCurrentUser, savePost } from "../api";
import { useLoaderData } from "react-router-dom";

export async function action({ params, request }) {
  const data = Object.fromEntries(await request.formData());
  await savePost(data, params.postid, getCurrentUser());
}

export default function SaveButton({ postId }) {
    const savedPosts = useLoaderData();
  const fetcher = useFetcher();
  const saved = savedPosts.some((post) => post.id === postId);

  return (
    <fetcher.Form method="post" className="saveform" action={`/${postId}/save`}>
      <button
        name="save"
        value={!saved}
        className={`savebutton ${saved ? "savebutton_active" : ""}`}
      ></button>
      <input type="hidden" name="userid"></input>
    </fetcher.Form>
  );
}
