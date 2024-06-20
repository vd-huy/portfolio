import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { darkTheme } from "./untils/Theme";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { BrowserRouter, Router } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <About />
          <Wrapper>
            <Skills />
            <Experience />
            <Education />
          </Wrapper>
          <Project />
          <Contact />
          <Footer />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
