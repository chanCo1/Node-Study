import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  position: absolute;
  padding: 50px 0;
  background-color: #5f9ea0b0;
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  color: #fff;
  width: 100%;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      Footer
    </FooterContainer>
  );
};

export default Footer;