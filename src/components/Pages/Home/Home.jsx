import React from 'react';
import styles  from './home.module.css';
import { Navbar } from 'components/Navbar/Navbar';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export const Home = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
          <Navbar/>
          {/* <img src="../Image/backgroun.jpg" alt="sad" /> */}
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
    </div>
  );
};