
import { Route, Routes } from "react-router-dom";

import './App.css'
import Hero from './components/Hero.jsx'
import CardsMap from './components/CardsMap.jsx'
import Header from './components/Header.jsx'
import AboutMe from './components/AboutMe.jsx'




function App() {
  

  return (
    <>
      
    <Header/>
  
    <Routes>

      {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Hero/>
              </>}
          />

      {/* PROJECTS */}
          <Route
            path="/projects"
            element={<CardsMap/>}
          />

      {/* ABOUT ME */}
        <Route
          path="/aboutme"
          element={<AboutMe/>}
        />

      {/* CONTACT */}
      <Route
        path="/contact"
        element={<CardsMap/>}
      />

    </Routes>
   </>
  )
}

export default App
