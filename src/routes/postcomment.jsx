import { postComment } from "../api";

export async function action({params, request}) {
    const data = await request.formData();
    await postComment(Object.fromEntries(data), params.postid);
  }