import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center text-white">
    <div className="py-1 px-3 bg-white text-blue-500 rounded hover:bg-gray-200">
      <Link to="/" className="font-bold text-lg">
        Home
      </Link>
      
    </div>
    <p className="ml-[6%] font-semibold text-[1.6rem] hover:text-blue-900 transition-colors">
  My Task Manager
</p>
    <div>

    <Link to="/register" className="py-1 px-3 m-2 bg-white text-blue-500 rounded hover:bg-gray-200">Register</Link>
      {user ? (
        <div className="flex items-center space-x-4">
          <span>Welcome, {user.username}</span>
          <button
            onClick={logout}
            className="bg-red-500 py-1 px-3 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login" className="py-1 px-3 bg-white text-blue-500 rounded hover:bg-gray-200">
          Login
        </Link>
      )}
    </div>
  </nav>
  );
};

export default Navbar;
