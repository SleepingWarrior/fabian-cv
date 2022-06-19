import React from 'react'
import styled from 'styled-components';

function AboutProjects() {
  return (
    <Wrapper>
      <div id='project-list' className='counter'>
        <h3 className='about-heading'>WebDev Projects</h3>
        <div className='projects engineering-projects'>
          <div className='about-box'>
            <span>2+</span>
            <h3>years of experience</h3>
          </div>
          <div className='about-box'>
            <span>3</span>
            <h3>projects completed</h3>
          </div>
          <div className='about-box'>
            <span>0</span>
            <h3>happy clients</h3>
          </div>
          <div className='about-box'>
            <span>0</span>
            <h3>awards won</h3>
          </div>
        </div>
        <h3 className='about-heading'>Engineering Projects</h3>
        <div className='projects web-projects'>
          <div className='about-box'>
            <span>12+</span>
            <h3>years of experience</h3>
          </div>
          <div className='about-box'>
            <span>50+</span>
            <h3>projects completed</h3>
          </div>
          <div className='about-box'>
            <span>35+</span>
            <h3>happy clients</h3>
          </div>
          <div className='about-box'>
            <span>2</span>
            <h3>awards won</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default AboutProjects

const Wrapper = styled.div`
  .counter {
    display: flex;
    flex-direction: column;
    border: solid 2px blue;
    width: 75%;

    h3 {
      color: white;
      margin-left: 1rem;
      font-size: 3rem;
      color: var(--yellow);
    }

    .projects {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      overflow: none;
      border: solid 1px yellow;
      flex-wrap: wrap;
      flex-direction: column;
    }

    .about-box {
      border: solid 3px red;
      border-radius: 10px;
      padding: 2rem;
      width: 25rem;
      text-align: center;
      background: #222;
      color: var(--yellow);
      font-size: 1.5rem;

      span {
        font-size: 4rem;
        color: var(--yellow);
      }
      h3 {
        font-size: 2rem;
        color: var(--text-color);
      }

    }
    .about .row .counter {
      flex: 1 1 30rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;