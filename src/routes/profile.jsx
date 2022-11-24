import { useLoaderData, useActionData } from "react-router-dom";
import React from "react";
import Posts from "../components/posts";
import { getPosts, createPost } from "../api";
import CreatePopup from "../components/createpopup";
import { redirect } from "react-router-dom";

export async function loader({ params, request }) {
  const posts = await getPosts();
  return posts;
}

export async function action({ params, request }) {
  let formData = await request.formData();
  const info = Object.fromEntries(formData);
  return await createPost(info);
}

export default function Profile() {
  let response = useActionData();
  const myposts = useLoaderData();
  const [isCreatePopupOpen, setIsCreatePopupOpen] = React.useState(false);

 

  function closeCreatePopup() {
    setIsCreatePopupOpen(false);
  }

  function openCreatePopup() {
    setIsCreatePopupOpen(true);
  }

  let username = "Diana";
  let picture =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png";
  let loggedIn = true;
  let bio = "Photographer";
  return (
    <main className="profile">
      <div className="profile__top-section">
        <div className="profile__info">
          <img className="profile__pic" src={picture}></img>
          <div>
            <h2 className="profile__name">{username}</h2>
            <p className="profile__bio">{bio}</p>
          </div>
        </div>
        {loggedIn && (
          <div className="profile__btns">
            <button
              type="button"
              className="profile__btn"
              onClick={openCreatePopup}
            >
              <img className="profile__icon" src=""></img>
            </button>
            <button type="button" className="profile__btn">
              <img className="profile__icon" src=""></img>
            </button>
            <button type="button" className="profile__btn">
              <img className="profile__icon" src=""></img>
            </button>
            <button type="button" className="profile__btn">
              <img className="profile__icon" src=""></img>
            </button>
          </div>
        )}
      </div>
      <nav className="profile__nav">
        <button className="profile__nav-btn">Your posts</button>
        <button className="profile__nav-btn">Saved</button>
      </nav>
      <div className="profile__posts">
        <Posts posts={myposts}></Posts>
      </div>
      <CreatePopup
        onClose={closeCreatePopup}
        isOpen={isCreatePopupOpen}
      ></CreatePopup>
    </main>
  );
}
