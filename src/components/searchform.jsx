import { Form } from "react-router-dom";
import React from "react";

export default function SearchForm({children}) {
  return (
  <Form className="searchform" id="searchform" role="search">
      {children}
    <button className="searchform__button"></button>
  </Form>
  )
}