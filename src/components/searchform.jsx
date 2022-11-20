
import React from "react";

export default function SearchForm({children}) {
  return (
  <form className="searchform">
      {children}
    <button className="searchform__button"></button>
  </form>
  )
}