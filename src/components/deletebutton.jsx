import { useFetcher } from "react-router-dom";
import React from "react";
import api from "../api";

export async function action({ params, request }) {
  await api.deletePost(params.postid);
}

export default function DeleteButton({ postId }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form
      method="post"
      className="deleteform"
      action={`/${postId}/delete`}
    >
      <button name="delete" className="deletebutton">
        &#x1F5D1;
      </button>
    </fetcher.Form>
  );
}
