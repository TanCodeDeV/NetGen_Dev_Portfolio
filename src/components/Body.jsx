import React from "react";
import { Outlet } from "react-router"; // Fix import
import Header from "./Header";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Body;
