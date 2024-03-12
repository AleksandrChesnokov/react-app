import "../App.css";
import React from "react";
import { Header } from "../components/Header/Header.tsx";
import { Outlet } from "react-router-dom";

export const Pages = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
