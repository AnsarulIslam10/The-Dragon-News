import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa6";
import FindUs from './FindUs';
const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login with</h2>
            <div className='*:w-full space-y-2'>
                <button className='btn'><FaGoogle />Login with Google</button>
                <button className='btn'><FaGithub />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;