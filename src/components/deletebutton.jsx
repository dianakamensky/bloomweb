import { useFetcher } from "react-router-dom";
import React from "react";

export async function action({ params, request }) {
    await deletePost(params.postId);
  }

export default function DeleteButton({ postId }) {
  const fetcher = useFetcher();


  return (
    <fetcher.Form method="post" className="deleteform" action={`/${postId}/delete`}>
      <button
        name="delete"
        className="deletebutton"
      ></button>
    </fetcher.Form>
  );
}
