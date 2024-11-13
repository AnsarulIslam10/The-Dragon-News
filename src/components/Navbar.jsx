import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className=" space-x-5">
                <Link to={'/'}>Home</Link>
                <Link to={'/career'}>Career</Link>
                <Link to={'/about'}>About</Link>
            </div>
            <div className='flex items-center gap-2'>
                <img src={userIcon} alt="" />
                <button className='btn px-10 py-2 rounded-none bg-[#403f3f] hover:bg-[#4a4a4a] text-base-100'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;