import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './navbar.module.css';

import { selectIsLoggedIn } from 'redux/authorization/selectors';
import { logOut } from 'redux/authorization/operations';

export const Navbar = () => {
  const name = useSelector(selectIsLoggedIn);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
  };
  return (
    <div className={styles.wrapper_nav}>
      <nav className={styles.nav_menu}>
        <div className={styles.div}>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
        
        </div>

        {!isLoggedIn ? (
          <div className={styles.div}>
            <NavLink to="/login" className={styles.link}>
              Login
            </NavLink>
            <NavLink to="/register" className={styles.link}>
              Register
            </NavLink>
          </div>
        ) : (
          <div className={styles.div}>
            <span className={styles.name}>{name}</span>
            <button className={styles.button} onClick={handleLogOut}>
              Exit
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};