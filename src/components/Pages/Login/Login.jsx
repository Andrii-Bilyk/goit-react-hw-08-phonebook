import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './login.module.css';

import { logIn } from 'redux/authorization/operations';

export const Login = () => {

  const { handleSubmit } = useForm();
  return (
    <div className={styles.main_wrapper}>
      <form className={styles.form} onSubmit={handleSubmit()}>
        <input
          className={styles.input}
          placeholder="Enter the email"
        />
        <input
          className={styles.input}
          placeholder="Enter the password"
          type="password"
        />

        <button className={styles.btn}>LOGIN</button>
        <p className={styles.text}>
        New user? <Link to="/register">Create your account</Link>
        </p>
      </form>
    </div>
  );
};