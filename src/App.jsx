
import { Route, Routes } from "react-router-dom";

import './App.css'
import LandingPage from './components/LandingPage.jsx'
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
                <LandingPage/>
              </>}
          />

      {/* PROYECTS */}
          <Route
            path="/proyects"
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
