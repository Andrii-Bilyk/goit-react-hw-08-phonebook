import React from 'react'; 
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import styles from './app.module.css';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { Navbar } from 'components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'components/Pages/Home/Home';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(fetchContacts())
  },[dispatch])
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
  );
}

export default App;
