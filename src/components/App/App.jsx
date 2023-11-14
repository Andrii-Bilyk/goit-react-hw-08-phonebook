import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Navbar } from 'components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'components/Pages/Home/Home';
import { Login } from 'components/Pages/Login/Login';
import { Register } from 'components/Pages/Registration/Registration';
import { PrivateRoute } from 'components/hoc/PrivateRoute';
import { PublicRoute } from 'components/hoc/PublicRoute';
import { refreshUser } from 'redux/authorization/operations';
import { selectIsRefreshing } from 'redux/authorization/selectors';

function App() {
  const refresh = useSelector(selectIsRefreshing)
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(refreshUser())
  },[dispatch])

  return refresh?
  <h1>Loading</h1>: 
  (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}/>
    <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
    <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
   </Routes>
    </>
   
  );
  
}

export default App;
