import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1"></div>
      <div className="space-x-5 flex-1">
        <Link to={"/"}>Home</Link>
        <Link to={"/career"}>Career</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <img src={userIcon} alt="" />
        </div>
        {user && user?.email ? (
          <button onClick={logOut} className="btn px-10 py-2 rounded-none bg-[#403f3f] hover:bg-[#4a4a4a] text-base-100">
            Log Out
          </button>
        ) : (
          <Link
            to={"/auth/login"}
            className="btn px-10 py-2 rounded-none bg-[#403f3f] hover:bg-[#4a4a4a] text-base-100"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
