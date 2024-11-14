import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mt-8">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start"><FaFacebook /> Facebook</button>
        <button className="btn join-item justify-start"><FaXTwitter/> Twitter</button>
        <button className="btn join-item justify-start"><FaInstagram/> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
