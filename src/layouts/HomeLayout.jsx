import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNav from "../components/layout-component/RightNav";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto py-5 grid md:grid-cols-12 gap-6">
        <aside className="col-span-3"><LeftNavbar></LeftNavbar></aside>
        <section className=" col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3"><RightNav></RightNav></aside>
      </main>
    </div>
  );
};

export default HomeLayout;
