import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../slice/authSlice';

export default function Auth(SpecificComponent, option, adimRoute = null) {

  const AuthenticationCheck = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {

      dispatch(auth());

    }, [dispatch]);
  }

  return AuthenticationCheck;
}