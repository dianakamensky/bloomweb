import { useFetcher } from "react-router-dom";
import { CurrentUserContext } from "../routes/root";
import React from "react";

export default function SaveButton({ postId }) {
  const fetcher = useFetcher();
  const currentUser = React.useContext(CurrentUserContext);
  const saved = currentUser.savedPosts.has(postId);

  return (
    <fetcher.Form method="post" className="saveform" action={`/${postId}/save`}>
      <button
        name="save"
        value={!saved}
        className={saved ? "savebutton_active" : "savebutton"}
      ></button>
      <input type="hidden" value={currentUser.id} name="userid"></input>
    </fetcher.Form>
  );
}
