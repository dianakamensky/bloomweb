import api from "../api";

export async function action({ params, request }) {
  const data = await request.formData();
   await api.createComment(Object.fromEntries(data), params.postid);
   return api.getPost(params.postid);
}

export async function loader({ params }) {
  return api.getPost(params.postid);
}