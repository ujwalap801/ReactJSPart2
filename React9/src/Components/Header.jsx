import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { loginContextObj } from '../Contexts/LoginContext';

const Header = () => {
  const { userLoginStatus, userLogOut } = useContext(loginContextObj);
  const navigate = useNavigate(); // Use navigate from react-router-dom

  const handleLogout = () => {
    userLogOut(); // Call your logout function
    navigate(''); // Redirect to home or any other page
  };

  return (
    <div className='bg-light py-2'>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link text-secondary" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-secondary" to="register">Register</Link>
        </li>
        {userLoginStatus === false ? (
          <li className="nav-item">
            <Link className="nav-link text-secondary" to="login">Login</Link>
          </li>
        ) : (
          <li className="nav-item">
            <span className="nav-link text-secondary" onClick={handleLogout} style={{ cursor: 'pointer' }}>
              Logout
            </span>
          </li>
        )}
        <li className="nav-item">
          <Link className="nav-link text-secondary" to="technologies">Technologies</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
