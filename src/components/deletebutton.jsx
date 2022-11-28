import { useFetcher } from "react-router-dom";
import React from "react";
import { deletePost } from "../api";
import Trash from "../images/trash.svg";

export async function action({ params, request }) {
    await deletePost(params.postid);
  }

export default function DeleteButton({ postId }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="post" className="deleteform" action={`/${postId}/delete`}>
      <button
        name="delete"
        className="deletebutton"
      ><img src={Trash}/></button>
    </fetcher.Form>
  );
}
