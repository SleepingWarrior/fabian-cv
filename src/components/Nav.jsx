// import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <Wrapper className='navbar'>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='about'>About</NavLink>
        </li>
        <li>
          <NavLink to='education'>Education</NavLink>
        </li>
        <li>
          <NavLink to='competencies'>Competencies</NavLink>
        </li>
        <li>
          <NavLink to='contact'>Contact</NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  heigth: 100%;
  ul {
    list-style: none;
    padding: 1rem 2rem;

    li {
      a {
        display: block;
        padding: 1rem;
        margin: 2rem 0;
        background: #333;
        color: #fff;
        font-size: 2rem;
        border-radius: 5rem;
        width: 30rem;

        &:hover {
          background-color: var(--icon-color);
        }
      }
    }
  }
`;
