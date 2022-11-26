import { useLoaderData } from "react-router-dom";
import Posts from "../components/posts";
import { getCurrentUser, getPosts } from "../api";

export async function loader() {
    const userId = getCurrentUser();
    const posts = await getPosts({saverId:userId});
    return posts;
}


export default function Saved() {
    const posts = useLoaderData();
    return (
        <Posts posts={posts}></Posts>
    )
}