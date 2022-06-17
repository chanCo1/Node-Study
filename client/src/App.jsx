import React, { memo } from 'react'
import {Routes, Route, NavLink} from 'react-router-dom';

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Navbar from './components/views/Navbar/Navbar';
import Footer from './components/views/Footer/Footer';

import Auth from './hoc/auth';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default memo(App);
