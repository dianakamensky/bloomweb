import { Form } from "react-router-dom";
import React from "react";

export default function createPopup({ onClose, isOpen }) {


  return (
    <div className={`popup ${isOpen && "popup_open"}`}>
      <div className="popup__main">
        <button className="popup__close-btn" onClick={onClose}>
        <i class="fa-solid fa-xmark"></i>
        </button>
        <h1 className="popup__title">Share an image</h1>
        <Form className="popup__form" method="post" onSubmit={onClose}>
          <input
            className="input"
            type="link"
            placeholder="Image link"
            name="image"
            id="image"
            required
          ></input>
           <input
            className="input"
            type="text"
            placeholder="Location"
            name="location"
            id="location"
            required
          ></input>
           <input
            className="input"
            type="date"
            placeholder="Date"
            name="date"
            id="date"
            required
          ></input>
           <input
            className="input"
            type="text"
            placeholder="Type of flower"
            name="flower"
            id="flower"
          ></input>
          <button className="popup__submitbtn" type="submit">Post</button>
        </Form>
      </div>
    </div>
  );
}
