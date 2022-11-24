import { useLoaderData } from "react-router-dom";
import { getPosts } from "../api";
import SearchForm from "../components/searchform";
import Posts from "../components/posts";

export async function loader({ params, request }) {
  const posts = await getPosts();
  return posts;
}



export default function Index() {
  const posts = useLoaderData();

  return (
    <div className="index">
      <SearchForm>
        <input className="input" placeholder="Flower" type="text" />
        <input className="input" placeholder="Location" type="text" />
        <input className="input" placeholder="Date" type="date" />
      </SearchForm>
      <Posts posts={posts}></Posts>
    </div>
  );
}
