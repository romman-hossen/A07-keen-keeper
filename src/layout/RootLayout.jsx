import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <div  className="flex flex-col min-h-screen"> 
      <Navbar />
      <div className="flex-1 bg-[#F8FAFC]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
