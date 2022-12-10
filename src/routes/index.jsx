import { useLoaderData } from "react-router-dom";
import api from "../api";
import SearchForm from "../components/searchform";
import Posts from "../components/posts";

export async function loader({ params, request }) {
  const url = new URL(request.url);
  const searchparams = Object.fromEntries(url.searchParams);
  const posts = await api.getPosts(searchparams);
  return posts.data;
}

export default function Index() {
  const posts = useLoaderData();

  return (
    <div className="index">
      <SearchForm>
        <input
          className="input"
          placeholder="Flower"
          type="text"
          name="flower"
        />
        <input
          className="input"
          placeholder="Location"
          type="text"
          name="location"
        />
        <div className="dateinput">
          <input className="input" placeholder="From" type="date" name="from" />
          <input className="input" placeholder="To" type="date" name="to" />
        </div>
      </SearchForm>
      <Posts posts={posts}></Posts>
    </div>
  );
}
