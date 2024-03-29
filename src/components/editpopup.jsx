import { useFetcher } from "react-router-dom";
import React from "react";

export default function EditPopup({ username, pfp, bio, onClose, isOpen }) {
  const fetcher = useFetcher();

  const [name, setName] = React.useState(username);
  const [image, setImage] = React.useState(pfp);
  const [description, setDescription] = React.useState(bio);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleImageChange(e) {
    setImage(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <div className={`popup ${isOpen && "popup_open"}`}>
      <div className="popup__main">
        <button className="popup__close-btn" onClick={onClose}>
        <i class="fa-solid fa-xmark"></i>
        </button>
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
            value={image}
            onChange={handleImageChange}
          ></input>
          <input
            className="input"
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            onChange={handleNameChange}
            value={name}
            required
          ></input>
          <input
            className="input"
            type="text"
            placeholder="Bio"
            name="bio"
            id="bio"
            maxLength="200"
            value={description}
            onChange={handleDescriptionChange}
          ></input>
          <button className="popup__submitbtn" type="submit">
            Update
          </button>
        </fetcher.Form>
      </div>
    </div>
  );
}
