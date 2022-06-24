import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Competencies from "./components/Competencies";
import Contact from "./components/Contact";
import styled from "styled-components";
import Header from "./components/Header";
import SharedLayout from "./components/SharedLayout";
import { useState } from "react";

function App() {
  const [isActive, setActive] = useState(false);

  const handleSelect = () => {
    setActive(!false);
  };
  
  return (
    <Wrapper className='App'>
      <BrowserRouter>
        <Header active={handleSelect} isActive={isActive} />
        <Routes>
          <Route path='/' element={<SharedLayout />} />
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='education' element={<Education />} />
          <Route path='competencies' element={<Competencies />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  font-family: "Nunito", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  border: none;
  text-transform: capitalize;
  font-size: 62.5%;
  overflow-x: hidden;

  .heading {
    text-align: center;
    font-size: var(--main-heading-h1);
    padding: 1rem;
    border-bottom: 0.1rem solid #fff4;
    color: var(--text-color);
  }

  .btn {
    padding: 0.7rem 4rem;
    background: #333;
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
    border-radius: 5rem;

    &::selection {
      background: var(--yellow);
    }
  }

  .btn i {
    padding: 0 0.5rem;
    font-size: 1.8rem;
  }
`;
