import React from "react";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <div className="card bg-base-100 border rounded-md">
            <figure className="px-8 pt-8">
              <img
                src={news?.image_url}
                alt=""
                className="rounded-xs"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn bg-[#D72050] hover:bg-[#fc386c]  text-base-100 rounded-none"><FaArrowLeft/> All news in this category</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
          <RightNav></RightNav>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
