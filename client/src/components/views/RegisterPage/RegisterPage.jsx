import React, { memo, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { register } from '../../../slice/registerSlice';

const RegisterContainer = styled.div`
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

const RegisterPage = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, loading, error } = useSelector((state) => state.register);

  const onChangeEmail = useCallback((e) => {
    setEmail(e.currentTarget.value);
  }, []);

  const onChangeName = useCallback((e) => {
    setName(e.currentTarget.value);
  }, []);

  const onChangePass = useCallback((e) => {
    setPassword(e.currentTarget.value);
  }, []);

  const onChangeConfirmPass = useCallback((e) => {
    setConfirmPassword(e.currentTarget.value);
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(data);

    if(password !== confirmPassword) {
      return alert('비밀번호가 확인을 다시해주세요')
    }

    dispatch(register({
      email: email,
      name: name,
      password: password
    }));

    if(data.success) {
      navigate('/login');
    } 

  }, [email, password, dispatch, data, navigate, name, confirmPassword]);

  return (
    <RegisterContainer>
      <h1>Register Page</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={onChangeName} />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={onChangeEmail} />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={password} onChange={onChangePass} />

        <label htmlFor="confirm">Confirm Password</label>
        <input id="confirm" type="password" value={confirmPassword} onChange={onChangeConfirmPass} />
        <br />

        <button>회원가입</button>
      </form>
    </RegisterContainer>
  );
};

export default memo(RegisterPage);