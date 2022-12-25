import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/root.css";
import Header from "../components/header";
import Footer from "../components/footer";
import api from "../api";
import { useLoaderData } from "react-router-dom";
import { getCurrentUser } from "../utils";

export const SavedPostsContext = React.createContext();

export async function loader({ params, request }) {
  const user = getCurrentUser();
  if (user) {
  return api.getSavedPosts();
  }
  return [];
}

export default function Root() {

  const savedPosts = useLoaderData();
  
  return (
    <SavedPostsContext.Provider value={savedPosts}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </SavedPostsContext.Provider>
  );
}
