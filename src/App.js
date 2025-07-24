import React, { useEffect, useState } from "react";
import Skills from "./Skills";
import Profile from "./Profile";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import Service from "./Service";
import Portfolio from "./Portfolio";
import "./App.css";

function App() {
 
  return (
    <>
      <Header/>
      <Profile />
      <About/>
      <Service/>
      <Portfolio/>
      <Skills />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
