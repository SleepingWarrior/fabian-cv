import "./App.css";
import Landing from "./components/Landing";
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
      <Landing />
      <About />
      <Education />
      <Competencies />
      <Contact />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  --yellow: #f9ca24;
  --blue: #1363df;
  font-family: "Nunito", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  border: none;
  text-transform: capitalize;
  background: #111;
  color: #fff;
  font-size: 62.5%;
  overflow-x: hidden;
`;

// overflow-x: hidden;
// padding-left: 35rem;
// ${'' /* *::selection {
//   background: var(--yellow);
//   color: #333;
// } */}

// ${'' /* html {
//   font-size: 62.5%;
//   overflow-x: hidden;
// }

// html::-webkit-scrollbar {
//   width: 1.4rem;
// }

// html::-webkit-scrollbar-track {
//   background: #222;
// }

// html::-webkit-scrollbar-thumb {
//   background: var(--yellow);
// }

// body {
//   background: #111;
//   overflow-x: hidden;
//   padding-left: 35rem;
// }
