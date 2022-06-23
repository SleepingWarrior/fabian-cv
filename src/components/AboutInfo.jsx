import React from "react";
import styled from "styled-components";

function AboutInfo() {
  return (
    <Wrapper id='about-info' className='container'>
      <div className='info'>
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
    </Wrapper>
  );
}

export default AboutInfo;

const Wrapper = styled.div`
  .info {
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 100%;
    font-size: 2rem;
    line-height: 2rem;
    ${'' /* outline: 5px solid red; */}
    border: none;

    h3 {
      font-size:var(--secondary-heading-h3);
      color: var(--yellow);
      padding: 1rem 0;
      font-weight: normal;
      padding-left: 5rem;
      ${'' /* outline: 2px solid yellow; */}
      border: none;
    }

    span {
      color: #eee;
      padding: 0.5rem;
      color: var(--text-color);
      ${'' /* outline: 1px solid red; */}
      border: none;
    }
  }
`;
