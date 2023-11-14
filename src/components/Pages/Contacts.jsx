import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import styles from '../components/App/app.module.css';

export const Contacts = () => {
  return (
    <div className={styles.main_wrapper}>
      <h1 className={styles.header}> PhoneBook</h1>
      <ContactForm />
      <h2 className={styles.header}>Contacts </h2>
      <Filter />
      <ContactList />
    </div>
  );
};