import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  background-color: #5f9ea0b0;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  width: 100%;

  .link {
    color: #fff;
    padding: 10px 30px;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavLink className='link' to='/'>Home</NavLink>
      <div>
        <NavLink className='link' to='/login'>login</NavLink>
        <NavLink className='link' to='/register'>register</NavLink>
      </div>
    </NavContainer>
  );
};

export default Navbar;