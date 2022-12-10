import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/root.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Root() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
