import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './login.module.css';

import { logIn } from 'redux/authorization/operations';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const dispatch =useDispatch()
  const submit = (data) => {
      dispatch(logIn(data))
      reset()
  }
  const { handleSubmit,register,reset } = useForm();
  return (
    <div className={styles.main_wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <input
          className={styles.input}
          placeholder="Enter the email"
          {...register('email')}
        />
        <input
          className={styles.input}
          placeholder="Enter the password"
          type="password"
          {...register('password')}
        />

        <button className={styles.btn}>LOGIN</button>
        <p className={styles.text}>
        New user? <Link to="/register">Create your account</Link>
        </p>
      </form>
    </div>
  );
};