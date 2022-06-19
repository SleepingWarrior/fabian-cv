import React from "react";
import styled from "styled-components";

const Education = () => {
  return (
    <Wrapper>
      <h1 className='heading'>
        my <span>education</span>
      </h1>
      <div className='box-container'>
        <div id='edu-box' className='edu-box'>
          <i class='bi bi-mortarboard'></i>
          <span>1998</span>
          <h3>Matriculated</h3>
          <p>St Andrews High School</p>
        </div>
        <div className='edu-box'>
          <i class='bi bi-mortarboard'></i>
          <span>2006</span>
          <h3>Chemical Engineering</h3>
          <p>University of Cape Town</p>
        </div>
        <div className='edu-box'>
          <i class='bi bi-mortarboard'></i>
          <span>2009</span>
          <h3>Project Management</h3>
          <p>Cape Peninsula Univeristy of Technology</p>
        </div>
        <div className='edu-box'>
          <i class='bi bi-mortarboard'></i>
          <span>2022</span>
          <h3>Front End Development</h3>
          <p>Hyeperion Dev</p>
        </div>
      </div>
      <div className='udemy-courses'>
        <h3 className='web-skills-heading webdev-courses'>Extra Web Developement Courses</h3>
        <ul className='skills-list'>
          <li>
            HTML & CSS Tutorial and Projects Course 2022 by <span>John Smilga</span>
            <div className='w3-dark-grey w3-round'>
              <div className='w3-container w3-round w3-yellow' style={{ width: "95%" }}>
                95%
              </div>
            </div>
          </li>
          <li>
            JavaScript by <span>John Smilga</span>
            <div className='w3-dark-grey w3-round'>
              <div className='w3-container w3-round w3-yellow' style={{ width: "80%" }}>
                80%
              </div>
            </div>
          </li>
          <li>
            The Complete 2022 Web Development Bootcamp by <span>Dr. Angela Yu</span>
            <div className='w3-dark-grey w3-round'>
              <div className='w3-container w3-round w3-yellow' style={{ width: "50%" }}>
                50%
              </div>
            </div>
          </li>
          <li>
            React Tutorial and Projects Course 2022 by <span>John Smilga</span>
            <div className='w3-dark-grey w3-round'>
              <div className='w3-container w3-round w3-yellow' style={{ width: "30%" }}>
                30%
              </div>
            </div>
          </li>
          <li>
            Node JS Tutorial and Project Course by <span>John Smilga</span>
            <div className='w3-dark-grey w3-round'>
              <div className='w3-container w3-round w3-yellow' style={{ width: "15%" }}>
                15%
              </div>
            </div>
          </li>
          <li>
            Advanced Dax for Microsoft Power BI Desktop by <span>Maven Analytics, Aaron Perry</span>
            <div className='w3-dark-grey w3-round'>
              <div className='w3-container w3-round w3-yellow' style={{ width: "75%" }}>
                75%
              </div>
            </div>
          </li>
        </ul>
      </div>

      <a href=' '>
        <button id='cv-btn' className='edu-btn btn'>
          Download CV <i class='bi bi-download'></i>
        </button>
      </a>
    </Wrapper>
  );
};

export default Education;

const Wrapper = styled.section`
  border: 5px solid red;
  margin: 0;
  padding: 0;
  height: 100vh;

  h3 {
    font-size: var(--secondary-heading);
    color: var(--text-color);
  }

  span {
    color: var(--yellow);
  }

  .box-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 1rem 0;
    margin-left: 4rem;
    margin-bottom: 0;
  }

  button {
    margin-left: 4.5rem;
    padding-bottom: 2rem;
    border: 1px solid red;
  }
  .edu-box {
    /* border: solid 1px red; */
    height: 15rem;
  }

  .edu-box {
    width: 27rem;
    margin: 3rem 1rem;
    padding-left: 4rem;
    border-left: 0.2rem solid #fff;
    position: relative;

    span {
      font-size: 1.3rem;
      background: #222;
      color: #fff;
      border-radius: 5rem;
      padding: 0.5rem 2.5rem;
    }

    h3 {
      font-size: var(--secondary-heading);
      color: var(--text-color);
      padding-top: 1.5rem;
    }

    p {
      font-size: 2rem;
      color: #eee;
      padding: 1rem 0;
    }

    i {
      position: absolute;
      top: -1.5rem;
      left: -2.5rem;
      height: rem;
      width: 5rem;
      border-radius: 50%;
      line-height: 5rem;
      text-align: center;
      font-size: 3rem;
      color: var(--icon-color);
      background: var(--yellow);
    }
    /* border: solid 1px red; */
  }

  .udemy-courses {
    margin-top: 2rem;
    margin-left: 4rem;
    margin-bottom: 2rem;
    border: solid 1px yellow;
    line-height: 2rem;
    width: 100%;

    ul li {
      font-size: 1.5rem;
      width: 90%;
      text-transform: none;
      margin: 2rem 0;
      margin-top: 2rem;
      color: var(--text-color);
      border: solid 1px red;
    }

    ul li span {
      color: var(--blue);
    }

    h3 {
      margin-left: 4rem;
      margin: 0;
      margin-bottom: 0;
      font-size: 3rem;
      /* border: solid 1px blue; */
    }

    a button {
      margin-bottom: 2rem;
    }
  }
`;
