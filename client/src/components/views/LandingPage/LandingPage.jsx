import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const LandingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const LandingPage = () => {

  useEffect(() => {

    // (async () => {
    //   try {
    //     const response = await axios.get('/api/hello');
    //     console.log(response.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // })();

    axios.get('/api/hello')
    .then(response => { console.log(response) })

  }, []);

  return (
    <LandingContainer>
      <h1>시작 페이지</h1>
    </LandingContainer>
  );
};

export default LandingPage;