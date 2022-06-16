import React, { memo, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { login } from '../../../slice/loginSlice';

const LoginContainer = styled.div`
   position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;

  h1 {
    color: cadetblue;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, loading, error } = useSelector((state) => state.login);

  const onChangeEmail = useCallback((e) => {
    setEmail(e.currentTarget.value);
  }, []);

  const onChangePass = useCallback((e) => {
    setPassword(e.currentTarget.value);
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    dispatch(login({
      email: email,
      password: password
    }))

    if(data.loginSuccess) {
      navigate('/');
    } else {
      alert('로그인 안됨');
    }
    // data.loginSuccess ? setLoginCheck(true) : setLoginCheck(false);
  }, [email, password, dispatch, data, navigate]);

  return (
    <LoginContainer>
      <h1>Login Page</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="">Email</label>
        <input type="email" value={email} onChange={onChangeEmail} />

        <label htmlFor="">Password</label>
        <input type="password" value={password} onChange={onChangePass} />
        <br />

        <button>Login</button>
      </form>
    </LoginContainer>
  );
};

export default memo(LoginPage);