import { useLoaderData } from "react-router-dom";
import React from "react";
import Posts from "../components/posts";
import { getPosts, createPost } from "../api";
import CreatePopup from "../components/createpopup";


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

  const errors = useActionData();
  const myposts = useLoaderData();
  const [isCreatePopupOpen, setIsCreatePopupOpen] = React.useState(false);

  function toggleCreatePopup() {
    setIsCreatePopupOpen(!isCreatePopupOpen);
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
              onClick={toggleCreatePopup}
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
      <div className="profile__posts">
        <Posts posts={myposts}></Posts>
      </div>
        <CreatePopup onClose={toggleCreatePopup} isOpen={isCreatePopupOpen}></CreatePopup>
    </main>
  );
}
