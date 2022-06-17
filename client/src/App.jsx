import React, { memo } from 'react'
import {Routes, Route, NavLink} from 'react-router-dom';

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Auth from './hoc/auth';

function App() {

  // const AuthenticPage = Auth(LandingPage, null)

  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>

      <Footer />
    </>

  );
}

export default memo(App);
