import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Props = {};
export default function Layout({}: Props) {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
