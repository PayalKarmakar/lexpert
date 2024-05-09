import React from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import { Outlet } from "react-router-dom";
import HeaderTop from "../components/website/HeaderTop";
import Header from "../components/website/Header";
import Footer from "../components/website/Footer";
import { Home } from "../pages";

const WebsiteLayout = () => {
  return (
    <>
      <HeaderTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default WebsiteLayout;
