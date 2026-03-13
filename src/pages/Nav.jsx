import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../useAuth';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const displayName = user?.name || user?.firstname || user?.email || 'User';

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-200 to-white text-white shadow-md sticky top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-5">
        <h1 className="text-3xl text-gray-800 font-bold">SrivibhaYoga</h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl focus:outline-none"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <div className="hidden md:flex gap-6 font-bold text-gray-600 items-center">
          <Link to="/home">Home</Link>
          <Link to="/About">About Us</Link>
          <Link to="/Gallery">Gallery</Link>
          <Link to="/Events">Events</Link>
          {user ? (
            <>
              <Link to="/profile">{displayName}</Link>
              <button onClick={handleLogout} className="text-yellow-600 hover:text-yellow-800">
                Logout
              </button>
            </>
          ) : (
            <Link to="/Login">Login/Register</Link>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 font-bold border-t border-white/20 pt-4 text-center">
          <Link to="/home" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/About" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/Gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
          <Link to="/Events" onClick={() => setIsOpen(false)}>
            Events
          </Link>
          {user ? (
            <>
              <Link to="/profile" onClick={() => setIsOpen(false)}>
                {displayName}
              </Link>
              <button onClick={handleLogout} className="text-yellow-600 hover:text-yellow-800">
                Logout
              </button>
            </>
          ) : (
            <Link to="/Login" onClick={() => setIsOpen(false)}>
              Login/Register
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
