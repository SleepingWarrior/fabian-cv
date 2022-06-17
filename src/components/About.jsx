import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <Heading className='heading'>
        <Span>about</Span> me
      </Heading>
      <div className='row'>
        <div id='about-info' className='info'>
          <h3>
            <span>Name : </span>Fabian Petersen
          </h3>
          <h3>
            <span>Age : </span> 41
          </h3>
          <h3>
            <span>Qualification : </span>Bsc Chemical Engineering
          </h3>
          <h3>
            <span>Institution : </span>University of Cape Town
          </h3>
          <h3>
            <span> Post : </span>Maintenance Manager
          </h3>
          <h3>
            <span> Company : </span>TotalEnergies
          </h3>
          <h3>
            <span> Language : </span>English, Afrikaans
          </h3>
          <h3>
            <span> hobbies : </span>Gaming, Gardening, DIY
          </h3>
          <h3>
            <span> FrontEnd : </span>HTML, CSS, JavaScript, Jquery, React
          </h3>
          <h3>
            <span> BackEnd : </span>NodeJS, Express, SQL
          </h3>
          <h3>
            <span> Other : </span>MicroSoft PowerBI{" "}
          </h3>
        </div>
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
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  display: flex;
  align-items: top;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 0;
  border: 1px solid blue;
  min-height: 100vh;
  padding: 1rem;
  margin-left: 2rem;
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

// ${'' /* .about .row .info {
//   flex: 1 1 30rem;
//   padding: 2rem 1rem;
//   padding-left: 6rem;
// }

// .about .row .info h3 {
//   font-size: 2rem;
//   color: var(--yellow);
//   padding: 1rem 0;
//   font-weight: normal;
// }

// .about .row .info h3 span {
//   color: #eee;
//   padding: 0 0.5rem;
// }

// .about .row .counter {
//   flex: 1 1 48rem;
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
// }

// .about-box {
//   width: 25rem;
//   background: #222;
//   text-align: center;
//   padding: 2rem;
//   margin: 1rem;
//   /* border: solid 1px red; */
// }

// .about-box {
//   width: 40rem;
//   height: 15rem;
//   border: solid 3px red;
//   border-radius: 10px;
// }

// .counter {
//   display: flex;
//   flex-direction: column;
//   /* border: solid 1px blue; */
//   width: 50%;
// }

// .info {
//   /* border: solid 1px yellow; */
//   margin-top: 1rem;
// }

// .about-heading {
//   color: white;
//   margin-left: 1rem;
// }

// .projects {
//   display: flex;
//   /* border: solid 1px yellow; */
//   flex-wrap: wrap;
//   /* flex-direction: column; */
// }

// ${'' /* .about .row .counter .about-box span {
//   font-size: 4rem;
//   color: var(--yellow);
// }

// .about .row .counter .about-box h3 {
//   font-size: 2rem;
//   color: #fff;
// }
