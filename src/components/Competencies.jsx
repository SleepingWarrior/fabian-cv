import React from "react";
import styled from "styled-components";

function Competencies() {
  return (
    <Wrapper>
      <h1 className='heading'>
        <span>my </span>Competencies
      </h1>
      <div className='container'>
        <div className='web-skills-container'>
          <h3 className='web-skills-heading'>Web Development</h3>
          <ul className='skills-list'>
            <li>
              HTML5
              <div className='w3-dark-grey w3-round'>
                <div className='w3-container w3-round w3-yellow' style={{ width: "95%" }}>
                  95%
                </div>
              </div>
            </li>
            <li>
              CSS
              <div className='w3-dark-grey w3-round'>
                <div className='w3-container w3-round w3-yellow' style={{ width: "80%" }}>
                  80%
                </div>
              </div>
            </li>
            <li>
              JavaScript
              <div className='w3-dark-grey w3-round'>
                <div className='w3-container w3-round w3-yellow' style={{ width: "70%" }}>
                  70%
                </div>
              </div>
            </li>
            <li>
              React
              <div className='w3-dark-grey w3-round'>
                <div className='w3-container w3-round w3-yellow' style={{ width: "60%" }}>
                  60%
                </div>
              </div>
            </li>
            <li>
              Node JS
              <div className='w3-dark-grey w3-round'>
                <div className='w3-container w3-round w3-yellow' style={{ width: "50%" }}>
                  50%
                </div>
              </div>
            </li>
            <li>
              Express
              <div className='w3-dark-grey w3-round'>
                <div className='w3-container w3-round w3-yellow' style={{ width: "90%" }}>
                  90%
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className='other-skills-container'>
          <h3 className='other-skills-heading'>Other Skills</h3>
          <ul className='skills-list'>
            <li>
              <b>Leadership</b>
              <p className='skills-description'>I have 8 years experience managing a team throughout South Africa. I enjoy leading by example and to teach my team as much as I can to overall improve our effeciency and to add value as a collective.</p>
            </li>
            <li>
              <b>Project Management</b>
              <p className='skills-description'>
                I enjoy working in a team and I have a solid foundation in project management. I worked as a project engineer and during this time I was involved with various projects for mutliple companies e.g. Simba Chips, Novus Print, KWV and Ford Motors to name a few. My involvement was from the
                design, construction and commissioning of the LPG projects on site. I interacted with various stakeholders, from the local authorities, client senior management, suppliers and contracors (tradesmen and engineers)
              </p>
            </li>
            <li>
              <b>Software Projects</b>
              <p className='skills-description'>
                As a manager i was fortunate to work on a few IT related projects for my department which sparked my interest in pursuing a career in software development. At TotalEnergies I worked on SAP Plant Maintenance inplementation, CASM Asset Management Software Implementation, DIMO
                Maintenance with a team from Paris and recently I assisted the developers with our job card software Sign2Bill.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

export default Competencies;

const Wrapper = styled.section`
  margin-left: 0rem;
  padding: 0;
  height: 100vh;

  .container {
    display: flex;
    flex-direction: column;

    .web-skills-container {
      margin-left: 4rem;
      margin-bottom: 2rem;
      line-height: 2rem;

      h3 {
        font-size: var(--primary-heading-h2);
        display: block;
        color: var(--text-color);
        margin: 0rem;
        padding: 1rem 0;
      }
    }

    ul {
      width: 95%;
      font-size: 1.5rem;
    }

    li {
      text-transform: none;
      color: var(--text-color);
      text-decoration: none;
      font-size: 1.5rem;
      padding: 0.5rem 0;
      margin-bottom: 1.5rem;
    }

    ul li span {
      color: var(--blue);
    }

    /* border: solid 1px blue; */
  }

  .other-skills-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;

    h3 {
      font-size: var(--primary-heading-h2);
      margin-left: 4rem;
    }

    ul {
      margin-left: 4rem;
      width: 100%;
      font-size: 1.5rem;
    }

    li {
      font-size: 1.5rem;
      /* width: 100%; */

      b {
        color: var(--icon-color);
        font-size: var(--secondary-heading-h3);
      }

      p {
        width: 95%;
      }
    }
  }

  h1 {
    text-align: center;
    margin: 0 6rem;
    font-size: 5rem;
    padding: 1rem;
    border-bottom: 0.1rem solid #fff4;
    color: #fff;
  }

  .skills-container h3 {
    /* margin-left: 2rem; */
  }

  .skills-container ul li b {
    color: var(--blue);
  }
`;
