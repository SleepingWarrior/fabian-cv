import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper className='contact-section'>
      <h1 className='heading' id='Contact'>
        <span>contact</span> me
      </h1>
      <div className='row'>
        <div className='content'>
          <h2 className='title'>contact info</h2>
          <div className='info'>
            <h3 className='info-email'>
              <i class='bi bi-envelope-fill'></i>fpetersen2@gmail.com
            </h3>
            <h3>
              <i class='bi bi-telephone-fill'></i>+27 82 887 8720
            </h3>
            <h3>
              <i class='bi bi-telephone-fill'></i>+27 21 941 4086{" "}
            </h3>
            <h3>
              <i class='bi bi-geo-alt-fill'></i>Cape Town, South Africa
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
        <form action=''>
          <h2 className='title'>Leave a Message</h2>
          <input type='text' placeholder='name' className='form-box' />
          <input type='email' placeholder='email' className='form-box' />
          <input type='text' placeholder='description' className='form-box' />
          <textarea name='' id='' cols='30' rows='10' className='form-box message' placeholder='message'></textarea>
          <button type='submit' id='email-btn' className='btn'>
            Send <i class='bi bi-send-fill'></i>
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  height: 100vh;
  margin: 0;
  padding: 0;

  h1 {
    text-align: center;
    margin: 0 6rem;
    padding: 1rem;
    border-bottom: 0.1rem solid #fff4;

    span {
      color: var(--yellow);
    }
  }

  .row {
    .content {
      h2 {
        font-size: var(--primary-heading-h2);
        margin-left: 4rem;
      }

      h3 {
        text-transform: none;
        font-size: var(--secondary-heading-h3);
        margin-left: 4rem;
        margin-bottom: 2rem;
        i {
          margin-right: 1.5rem;
          color: var(--yellow);
        }
      }

      .socials {
        display: flex;
        padding: 0.5rem;
        font-size: 3rem;
        margin-left: 4rem;
        gap: 5rem;
        margin-bottom: 2rem;

        i {
          color: var(--icon-color);

          &:hover {
            color: var(--yellow);
            cursor: pointer;
            transform: scale(1.8);
          }
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      padding-top: 0;

      h2 {
        font-size: var(--primary-heading-h2);
        width: 100%;
        padding: 0;
        margin-left: 4rem;
      }

      .form-box {
        padding: 0.5rem;
        margin: 1rem 4rem;
        background: #3333;
        color: #fff;
        text-transform: none;
        font-size: 1.7rem;
        width: 50%;
        border: 1px solid var(--icon-color);

        &::placeholder {
          text-transform: capitalize;
        }
      }

      input {
        width: 50%;
      }

      .message {
        height: 10rem;
        resize: none;
      }

      button {
        width: 15rem;
        margin: 1.5rem 4rem;
        outline: none;
        padding: 0.7rem 2rem;
        border: none;

        &:hover {
          background-color: var(--icon-color);
        }
      }
    }
  }
`;
