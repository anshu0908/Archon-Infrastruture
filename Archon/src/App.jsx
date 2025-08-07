import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Values from './Components/Values'
import Design from './Components/Desgin'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Values />
      <Design />
      <Projects /> 
      <Contact/>
    </div>
  );
};

export default App;
