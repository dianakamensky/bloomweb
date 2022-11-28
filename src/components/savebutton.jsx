import { useFetcher } from "react-router-dom";
import { CurrentUserContext } from "../routes/root";
import React from "react";
import { savePost } from "../api";

export async function action({ params, request }) {
  const data = Object.fromEntries(await request.formData());
  await savePost(data, params.postid, data.userid);
}

export default function SaveButton({ postId }) {
  const fetcher = useFetcher();
  const currentUser = React.useContext(CurrentUserContext);
  const saved = currentUser.savedPosts.has(postId);

  return (
    <fetcher.Form method="post" className="saveform" action={`/${postId}/save`}>
      <button
        name="save"
        value={!saved}
        className={`savebutton ${saved ? "savebutton_active" : ""}`}
      ></button>
      <input type="hidden" value={currentUser.id} name="userid"></input>
    </fetcher.Form>
  );
}
