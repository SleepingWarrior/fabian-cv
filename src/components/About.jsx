import React from "react";
import styled from "styled-components";
import AboutInfo from "./AboutInfo";
// import AboutProjects from "./AboutProjects";

const About = () => {
  return (
    <Wrapper>
      <h1 className='heading'>
        <span>about</span> me
      </h1>
      <div className='row'>
        <AboutInfo />
        {/* <AboutProjects /> */}
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  border: solid 3px red;
  height: 100vh;
  margin:0;
  padding:0;
  /* margin-left: 2rem; */

    span {
      color: var(--yellow);
    }
`;
