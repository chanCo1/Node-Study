import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const LandingContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  color: cadetblue;

  button {
    width: 100%;
    border: none;
    background-color: #5f9ea0a8;
    padding: 10px 0;
    color: #fff;
    cursor: pointer;
  }
`;

const LandingPage = () => {

  const { data, loading, error } = useSelector((state) => state.login);
  console.log(data);

  const navigate = useNavigate();

  const [ loginState, setLoginState ] = useState();

  useEffect(() => {

    (async () => {
      try {
        const response = await axios.get('/api/hello');
        console.log(response.data);
        setLoginState(data)
      } catch (err) {
        console.log(err);
      }
    })();
  }, [data]);

  const onClickLogout = useCallback((e) => {
    (async () => {
      try {
        const response = await axios.get('/api/users/logout');
        console.log(response.data);

        if(response.data) {
          navigate('/login');
        } else {
          alert('로그아웃 안됨');
        }

      } catch (err) {
        console.log(err);
      }
    })();
    
  }, [navigate]);

  return (
    <LandingContainer>
      <h1>&lt; / &gt;</h1>

      {loginState && <button onClick={onClickLogout}>로그아웃</button>}
      {/* <button onClick={onClickLogout}>로그아웃</button> */}
    </LandingContainer>
  );
};

export default LandingPage;