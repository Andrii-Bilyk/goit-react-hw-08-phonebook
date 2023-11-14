import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styles from './registration.module.css';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/authorization/operations';

export const Register = () => {
  const dispatch =useDispatch()
  const { register, handleSubmit, reset } = useForm();
  const submit = data =>{
    dispatch(registerThunk(data))
    reset()
}
  return (
    <div className={styles.main_wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <input
          className={styles.input}
          placeholder="Enter the name"
          {...register('name')}
        />
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

        <button type='submit' className={styles.btn}>Register</button>
        <span className={styles.text}>
        Already have an account?
          <Link to="/login">Log in!</Link>
        </span>
      </form>
    </div>
  );
};