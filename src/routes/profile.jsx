import {
  useLoaderData,
  NavLink,
  Outlet,
  redirect,
  Form
} from "react-router-dom";
import React from "react";
import EditPopup from "../components/editpopup";
import { createPost, getUser } from "../api";
import CreatePopup from "../components/createpopup";
import { useAuth } from "../hooks/authprovider";

export async function loader({ params, request }) {
  const user = await getUser();
  if (!user) {
    return redirect("/signin");
  }
  return getUser();
}

export async function action({ params, request }) {
  let formData = await request.formData();
  const info = Object.fromEntries(formData);
  return await createPost(info);
}

const saved = true;

export default function Profile() {
  const { logout } = useAuth();
  const user = useLoaderData();
  const [isCreatePopupOpen, setIsCreatePopupOpen] = React.useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = React.useState(false);

  function closeCreatePopup() {
    setIsCreatePopupOpen(false);
  }

  function openCreatePopup() {
    setIsCreatePopupOpen(true);
  }

  function closeEditPopup() {
    setIsEditPopupOpen(false);
  }

  function openEditPopup() {
    setIsEditPopupOpen(true);
  }

  return (
    <main className="profile">
      <div className="profile__top-section">
        <div className="profile__info">
          <img className="profile__pic" src={user.pfp}></img>
          <div>
            <h2 className="profile__name">{user.username}</h2>
            <p className="profile__bio">{user.bio}</p>
          </div>
        </div>
        {user && (
          <div className="profile__btns">
            <button
              type="button"
              className="profile__btn"
              onClick={openCreatePopup}
            >
              +
            </button>
            <button
              type="button"
              className="profile__btn"
              onClick={openEditPopup}
            >
              &#x1F589;
            </button>{" "}
            <button
              type="submit"
              className="profile__btn"
              onClick={logout}
            >
            </button>
          </div>
        )}
      </div>
      <nav className="profile__nav">
        <NavLink
          end
          to="/profile"
          className={({ isActive }) =>
            `profile__nav-btn ${isActive ? "profile__nav-btn_active" : ""}`
          }
        >
          Your posts
        </NavLink>
        <NavLink
          to="/profile/saved"
          className={({ isActive }) =>
            `profile__nav-btn ${isActive ? "profile__nav-btn_active" : ""}`
          }
        >
          Saved
        </NavLink>
      </nav>

      <Outlet />

      <CreatePopup onClose={closeCreatePopup} isOpen={isCreatePopupOpen} />
      <EditPopup onClose={closeEditPopup} isOpen={isEditPopupOpen} />
    </main>
  );
}
