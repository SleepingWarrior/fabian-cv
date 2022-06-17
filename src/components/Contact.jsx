import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper className='contact-section'>
      <Heading ><Span>contact</Span> me </Heading>
      <div className='row'>
        <div className='content'>
          <h3 className='title'>contact info</h3>
          <div className='info'>
            <h3 className='info-email'>
              <i className='fas fa-envelope'></i>fpetersen2@gmail.com
            </h3>
            <h3>
              <i className='fas fa-phone'></i>+27 82 887 8720
            </h3>
            <h3>
              <i className='fas fa-phone'></i>+27 21 941 4086{" "}
            </h3>
            <h3>
              <i className='fas fa-map-marker-alt'></i>Cape Town, South Africa
            </h3>
          </div>
          <div className='socials'>
            <a href={"https://www.linkedin.com/in/fabian-petersen-a5ba6737"}>
              <span className='socials-icons'>
                <i className='bi bi-linkedin'></i>
              </span>
            </a>
            <a href={"https://twitter.com/fabianc2k?t=NpEncRoxM8iMbkwI0lO-HA&s=09"}>
              <span className='socials-icons'>
                <i className='bi bi-twitter'></i>
              </span>
            </a>
            <a href={"https://github.com/SleepingWarrior"}>
              <span className='socials-icons'>
                <i className='bi bi-github'></i>
              </span>
            </a>
          </div>
        </div>
        <Form action=''>
          <h3 className='title'>Leave a Message</h3>
          <Input type='text' placeholder='name' className='form-box' />
          <Input type='email' placeholder='email' className='form-box' />
          <Input type='text' placeholder='description' className='form-box' />
          <TextArea name='' id='' cols='30' rows='10' className='form-box message' placeholder='message'></TextArea>
          <button type='submit' id='email-btn' className='btn'>
            send <i className='fas fa-paper-plane'></i>
          </button>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  ${"" /* height: 90vh; */}
  margin: 0;
  padding: 0;
  border: 1px solid red;
  /* border: 1px solid red; */
`
const Heading = styled.h1`
    text-align: center;
    margin: 0 6rem;
    font-size: 5rem;
    padding: 1rem;
    border-bottom: 0.1rem solid #fff4;
    color: #fff;
`
const Span = styled.span`
color: var(--yellow);
`;

const Form = styled.form`
  margin: 1rem 0;
  padding-top: 0;
  border: 1px solid red;
`;

const Input = styled.input`
  width: 100%;
`;

const TextArea = styled.textarea``;
//   .contact .row form {
//     margin: 1rem 0;
//     padding-top: 0;
//     /* border: 1px solid red; */
//   }

//   .contact .row form {
//     border: 1px solid red;
//     width: 100%;
//   }

//   .info-email {
//     text-transform: none;
//   }
// `;
