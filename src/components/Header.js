import React from 'react';
import { Auth } from '../lib';
import { Link, useHistory } from 'react-router-dom';

function logout(history) {
  return () => {
    Auth.removeToken();
    history.push('/');
  };
}

const Header = () => {
  const history = useHistory();

  const links = Auth.getToken() ? (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a href="#/" className="nav-link" onClick={logout(history)}>
          Logout
        </a>
      </li>
    </ul>
  ) : (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/sign-in" className="nav-link">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/sign-up" className="nav-link">
          Register
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-fade mb-3">
      {links}
    </nav>
  );
};

export default Header;
