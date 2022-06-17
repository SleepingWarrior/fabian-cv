import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <Wrapper>
      <Image src={"./images/profile-image-modified.jpeg"} alt='' />
      <Text class='post'>Full Stack Developer</Text>
      <Nav />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 35rem;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  text-align: center;
  min-height: 100vh;
  padding: 1rem;
  margin-left: 2rem;
  /* border: solid 1px blue; */
`;
const Image = styled.img`
  height: 25rem;
  width: 25rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 0.7rem solid var(--yellow);
`;

const Text = styled.p`
  font-size: 3rem;
  color: #eee;
`;
