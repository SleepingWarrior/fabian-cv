import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import profileImage from "../images/profile-image-modified.jpeg";

const Header = () => {
  return (
    <Wrapper>
      <img src={profileImage} alt='profile_image' />
      <p className='post'>Full Stack Developer</p>
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
  ${'' /* border: solid 1px blue; */}

  img {
    ${'' /* background-image:url(../public/images/profile-image-modified.jpeg) */}
    height: 25rem;
    width: 25rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 0.7rem solid var(--yellow);
  }

  p {
    font-size: 3rem;
    color: #eee;
  }
`;
