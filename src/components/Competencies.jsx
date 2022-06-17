import React from "react";
import styled from "styled-components";

function Competencies() {
  return (
    <Wrapper>
      <Heading className='heading'>
        <Span>my </Span>Competencies
      </Heading>
      <DivSkills className='skills-container'>
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
      </DivSkills>
    </Wrapper>
  );
}

export default Competencies;

const Wrapper = styled.section`
    margin-left: 0rem;
    padding: 0;
    border: 1px solid red;
`
const DivSkills = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* height: 100vh; */}
  border: 1px solid red;
`;

const Heading = styled.h1`
  text-align: center;
  margin: 0 6rem;
  font-size: 5rem;
  padding: 1rem;
  border-bottom: 0.1rem solid #fff4;
  color: #fff;
`;

const Span = styled.span`
  color: var(--yellow);
`;



//   .skills-list {
//     /* border: 1px solid blue; */
//     margin-left: 2rem;
//     max-width: 100%;
//   }

//   .web-skills-container {
//     width: 100%;
//   }

//   .skills-list li div {
//     font-size: 2rem;
//   }

//   .edu-btn {
//     margin: 3rem 1rem;
//   }

//   .skills-container ul li {
//     font-size: 1.8rem;
//     margin-left: 0rem;
//     width: 100%;
//   }

//   .skills-container h3 {
//     margin-left: 2rem;
//   }

//   .other-skills-container {
//     display: flex;
//     border: 1px solid blue;
//     margin-left: 0rem;
//     width: 100%;
//     padding: 0;
//     background: red;
//   }

//   .other-skills-container h3 {
//     display: block;
//     color: white;
//     margin-left: 2rem;
//   }

//   .other-skills-container ul {
//     display: block;
//   }

//   .other-skills-container li {
//     display: block;
//   }

//   .other-skills-container p {
//     display: block;
//   }

//   .skills-container ul li b {
//     color: var(--blue);
//   }