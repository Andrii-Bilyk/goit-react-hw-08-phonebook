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
import { Login } from 'components/Pages/Login/Login';
import { Register } from 'components/Pages/Registration/Registration';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(fetchContacts())
  },[dispatch])
  return (
    <>
          <Navbar/>
          <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
    </>
   
  );
}

export default App;
