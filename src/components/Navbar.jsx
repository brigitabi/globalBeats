import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between py-5 px-8 z-[100] w-full">
      <Link to="/">
        <h1 className="text-black-900 text-3xl font-bold cursor-pointer text-black">
          G L O B AL BEATS
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-black font-bold pr-5">Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-[black] text-white px-5 py-4 rounded cursor-pointer font-bold"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-black font-bold pr-5">Sign IN</button>
          </Link>
          <Link to="/signup">
            <button className="bg-[black] text-white px-5 py-4 rounded cursor-pointer font-bold">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
