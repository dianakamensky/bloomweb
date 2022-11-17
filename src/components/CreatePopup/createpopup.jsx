import "./createpopup.css";

export default function createPost({ onClose, isOpen }) {
  return (
    <div className={`popup ${isOpen && "popup_open"}`}>
      <div className="createpopup">
        <button className="popup__close-btn" onClick={onClose}></button>
        <h1 className="createpopup__title">Share an image</h1>
        <form className="createpopup__form">
          <input
            className="createpopup__input"
            type="link"
            placeholder="Image link"
            name="image"
            id="image"
            required
          ></input>
           <input
            className="createpopup__input"
            type="text"
            placeholder="Location"
            name="location"
            id="location"
            required
          ></input>
           <input
            className="createpopup__input"
            type="date"
            placeholder="Date"
            name="date"
            id="date"
            required
          ></input>
           <input
            className="createpopup__input"
            type="text"
            placeholder="Type of flower"
            name="flower"
            id="flower"
          ></input>
        </form>
      </div>
    </div>
  );
}
