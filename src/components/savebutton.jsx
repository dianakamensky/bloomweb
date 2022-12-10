import { useFetcher } from "react-router-dom";
import React from "react";
import api from "../api";
import { useLoaderData } from "react-router-dom";

export async function action({ params, request }) {
  const data = Object.fromEntries(await request.formData());
  await api.savePost(data, params.postid);
}

export default function SaveButton({ postId }) {
    const savedPosts = useLoaderData();
  const fetcher = useFetcher();
  const saved = savedPosts.some((post) => post._id === postId);

  return (
    <fetcher.Form method="post" className="saveform" action={`/${postId}/save`}>
      <button
        name="save"
        value={!saved}
        className={`savebutton ${saved ? "savebutton_active" : ""}`}
      ></button>
    </fetcher.Form>
  );
}
