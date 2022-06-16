import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const LandingContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  color: cadetblue;
`;

const LandingPage = () => {

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

  return (
    <LandingContainer>
      <h1>&lt; / &gt;</h1>
    </LandingContainer>
  );
};

export default LandingPage;