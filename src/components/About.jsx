import React from "react";
import styled from "styled-components";
import AboutInfo from "./AboutInfo";

const About = () => {
  return (
    <Wrapper>
      <h1 className='heading'>
        <span>about</span> me
      </h1>
      <div className='row'>
        <AboutInfo />
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  height: 100vh;
  margin: 0;
  padding: 0;

  span {
    color: var(--yellow);
  }
`;
