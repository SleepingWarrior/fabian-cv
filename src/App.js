import Contact from "./components/Contact";
import Competencies from "./components/Competencies";
import styled from "styled-components";
import About from "./components/About";
import Education from "./components/Education";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Wrapper className='App'>
      <Header />
      <Home />
      <About />
      <Education />
      <Competencies />
      <Contact />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  /* --blue: #1363df; */
  font-family: "Nunito", sans-serif;
  /* margin: 0; */
  /* padding: 0; */
  border: 3px solid yellow;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  border: none;
  text-transform: capitalize;
  /* background: var(--background); */
  font-size: 62.5%;
  overflow-x: hidden;

  .heading {
    text-align: center;
    margin: 0 6rem;
    font-size: var(--main-heading-h1);
    padding: 1rem;
    border-bottom: 0.1rem solid #fff4;
    color: var(--text-color);
    /* display: inline-block; */
  }

  .btn {
    padding: 0.7rem 4rem;
    background: #333;
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
    border-radius: 5rem;
  }

  .btn i {
    padding: 0 0.5rem;
    font-size: 1.8rem;
    &:hover {
      background: var(--yellow);
    }
  }
`;
