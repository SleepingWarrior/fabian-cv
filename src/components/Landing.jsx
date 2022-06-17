import React from "react";
import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <header>
        <div class='user'>
          <img src='./images/profile-image-modified.jpeg' alt='' />
          <Text class='post'>Full Stack Developer</Text>
        </div>
      </header>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.section`
  min-height: 100vh;
  padding: 1rem;
  margin-left: 2rem;
`;

const Text = styled.p`
  text-transform: none;
`;
