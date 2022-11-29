import { editProfile } from "../api";

export async function action({params, request}) {
    const data = await request.formData();
    await editProfile(Object.fromEntries(data));
  }