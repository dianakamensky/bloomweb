import React from "react";
import {
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import "../styles/root.css";
import Header from "../components/header";
import Footer from "../components/footer";
import {getUser} from "../api";


export const CurrentUserContext = React.createContext();
const currentUser =  await getUser();


export default function Root() {
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </CurrentUserContext.Provider>
  );
}
