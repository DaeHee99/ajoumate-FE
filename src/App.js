import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Router from "./routes/router";

function App() {
  return (
    <StAppContainer>
      <Header />
      <Router />
      <Navigation />
    </StAppContainer>
  );
}

const StAppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
