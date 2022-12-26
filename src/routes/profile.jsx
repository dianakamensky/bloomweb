import {
  useLoaderData,
  NavLink,
  Outlet,
  redirect,
  Navigate,
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "react-router-dom";
import React from "react";
import EditPopup from "../components/editpopup";
import api from "../api";
import CreatePopup from "../components/createpopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export async function loader({ params, request }) {
  const user = await api.getUser();
  if (!user) {
    return redirect("/signin");
  }
  return user;
}

export async function action({ params, request }) {
  let formData = await request.formData();
  const info = Object.fromEntries(formData);
  return await api.createPost(info);
}

const saved = true;

export default function Profile() {
  const navigate = useNavigate();
  const error = useRouteError();
  const user = useLoaderData();

  const [isCreatePopupOpen, setIsCreatePopupOpen] = React.useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = React.useState(false);

  if (isRouteErrorResponse(error)) {
    return <Navigate to="/signin"></Navigate>;
  }

  function logout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
    navigate("/signin", { replace: true });
  }

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
          {user.pfp ? (
            <img className="profile__pic" src={user.pfp} />
          ) : (
            <i className="fa-solid fa-user"></i>
          )}
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
              <i className="fa-solid fa-plus"></i>
            </button>
            <button
              type="button"
              className="profile__btn"
              onClick={openEditPopup}
            >
              <i className="fa-solid fa-user-pen"></i>
            </button>
            <button type="submit" className="profile__btn" onClick={logout}>
              <i className="fa-solid fa-right-from-bracket"></i>
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
      <EditPopup
        username={user.username}
        pfp={user.pfp}
        bio={user.bio}
        onClose={closeEditPopup}
        isOpen={isEditPopupOpen}
      />
    </main>
  );
}
