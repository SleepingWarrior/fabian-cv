import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <Wrapper class='navbar'>
      <Menu>
        <Li class='links'>
          <Link href='#home'>Home</Link>
        </Li>
        <Li class='links'>
          <Link href='#about'>About</Link>
        </Li>
        <Li class='links'>
          <Link href='#education'>Education</Link>
        </Li>
        <Li class='links'>
          <Link href='#competencies'>Competencies</Link>
        </Li>
        <Li class='links'>
          <Link href='#contact'>Contact</Link>
        </Li>
      </Menu>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav``;

const Menu = styled.ul`
  list-style: none;
  padding: 1rem 3rem;
`;

const Li = styled.li``;

const Link = styled.a`
  display: block;
  padding: 1rem;
  margin: 2rem 0;
  background: #333;
  color: #fff;
  font-size: 2rem;
  border-radius: 5rem;
  width: 30rem;
`;
