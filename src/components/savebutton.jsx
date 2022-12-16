import { useFetcher } from "react-router-dom";
import React from "react";
import api from "../api";
import { SavedPostsContext } from "../routes/root";

export async function action({ params, request }) {
  const data = Object.fromEntries(await request.formData());
  if (data.save === "true") {
  api.savePost(params.postid)
  }
  else {
    api.unsavePost(params.postid);
  }
}

export default function SaveButton({ postId }) {
  const fetcher = useFetcher();
  const savedPosts = React.useContext(SavedPostsContext);
  const saved = savedPosts.savedPosts.some((post) => post._id === postId);

  return (
    <fetcher.Form method="put" className="saveform" action={`/${postId}/save`}>
      <button
        name="save"
        value={!saved}
        className={`savebutton ${saved ? "savebutton_active" : ""}`}
      ></button>
    </fetcher.Form>
  );
}
