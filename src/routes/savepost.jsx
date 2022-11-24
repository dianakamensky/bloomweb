import { savePost } from "../api";


export async function action({ params, request }) {
  const data = Object.fromEntries(await request.formData());
  await savePost(data, params.postid, data.userid);
}
