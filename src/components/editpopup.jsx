import { useFetcher } from "react-router-dom";
import React from "react";

export default function EditPopup({ onClose, isOpen }) {
  const fetcher = useFetcher();

  return (
    <div className={`popup ${isOpen && "popup_open"}`}>
      <div className="popup__main">
        <button className="popup__close-btn" onClick={onClose}></button>
        <h1 className="popup__title">Edit your profile</h1>
        <fetcher.Form
          className="popup__form"
          method="post"
          action="/profile/edit"
          onSubmit={onClose}
        >
          <input
            className="input"
            type="link"
            placeholder="Profile image"
            name="pfp"
            id="pfp"
          ></input>
          <input
            className="input"
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            required
          ></input>
          <input
            className="input"
            type="text"
            placeholder="Bio"
            name="bio"
            id="bio"
            maxLength="200"
          ></input>
          <button className="popup__submitbtn" type="submit">
            Update
          </button>
        </fetcher.Form>
      </div>
    </div>
  );
}
