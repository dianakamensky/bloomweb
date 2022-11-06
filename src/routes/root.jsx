import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation, useSubmit } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";




export default function Root() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
    )
}