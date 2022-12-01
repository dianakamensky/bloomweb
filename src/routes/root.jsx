import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/root.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { AuthProvider } from "../hooks/authprovider";

export default function Root() {

  return (
    <AuthProvider>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </AuthProvider>
  );
}
