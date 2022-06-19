import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper className='home' id='home'>
      <h3>WELCOME TO MY SITE !</h3>
      <h1>
        Biography <span> Fabian Petersen</span>
      </h1>
      <p class='bio'>
        I’m a chemical engineer who found his true passion to be web development. Since I started to code I cannot get enough of the endless possibilities that exist as a developer. Learning new things excites me and as an engineer this is right up my alley.
        <br />
        <br />
        At the moment I'm busy completing the Full Stack Web Development Bootcamp at Hyperion Dev and I enjoy every minute of the journey. In addition, I do extra online courses on Udemy to broaden my knowldege as a developer, learning best practices from industry experts and to create effecient yet
        well written code. My goal is to become a full time developer thereby doing what I love.
      </p>
      <Link href=' about'>
        <button id='about-btn' class='btn'>
          about me<i class='fas fa-user'></i>
        </button>
      </Link>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  display: flex;
  flex-flow: column;
  padding: 0 15rem;
  border: 3px solid red;
  height: 100vh;
  justify-content: center;

  h3 {
    font-size: 3rem;
    margin-bottom: 3rem;
    color: #fff;
    border: 1px solid blue;
  }

  h1 {
    font-size: 5rem;
    color: #fff;
    border: 1px solid red;
  }

  span {
    color: var(--yellow);
  }

  p {
    font-size: 2rem;
    color: #eee;
    padding: 1rem 0;
    border: 1px solid blue;
    line-height: 2.8rem;
  }

  button {
    padding: 0 0.5rem;
    font-size: 1.8rem;
    padding: 0.7rem 4rem;
    background: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 1rem;
    font-size: 2rem;
    border-radius: 5rem;
  }
`;
const Link = styled.a``;
