import {
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

export default function Root() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
