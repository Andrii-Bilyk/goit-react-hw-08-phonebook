import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styles from './register.module.css';

export const Register = () => {
  const { handleSubmit } = useForm();

  return (
    <div className={styles.main_wrapper}>
      <form className={styles.form} onSubmit={handleSubmit()}>
        <input
          className={styles.input}
          placeholder="Enter the name"
        />
        <input
          className={styles.input}
          placeholder="Enter the email"
        />
        <input
          className={styles.input}
          placeholder="Enter the password"
          type="password"
        />

        <button className={styles.btn}>Register</button>
        <span className={styles.text}>
        Already have an account?
          <Link to="/login">Log in!</Link>
        </span>
      </form>
    </div>
  );
};