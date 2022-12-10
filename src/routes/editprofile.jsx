import api from "../api";

export async function action({ params, request }) {
  const data = await request.formData();
  await api.updateUser(Object.fromEntries(data));
}
