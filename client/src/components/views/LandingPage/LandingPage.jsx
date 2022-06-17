import React, { useCallback, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LandingContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  color: cadetblue;
`;

const LandingPage = () => {

  const navigate = useNavigate();

  useEffect(() => {

    (async () => {
      try {
        const response = await axios.get('/api/hello');
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

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
    
  }, []);

  return (
    <LandingContainer>
      <h1>&lt; / &gt;</h1>

      <button onClick={onClickLogout}>로그아웃</button>
    </LandingContainer>
  );
};

export default LandingPage;