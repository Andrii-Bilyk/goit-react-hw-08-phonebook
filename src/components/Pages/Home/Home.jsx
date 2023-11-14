import React, { useEffect } from 'react';
import styles  from './home.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(fetchContacts())},[dispatch])
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
      
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
    </div>
  );
};