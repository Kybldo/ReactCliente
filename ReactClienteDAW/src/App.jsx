import { useState } from 'react'

import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import {Profile} from "./components/Profile.jsx";
import {Skill} from "./components/Skill.jsx";

import './App.css'

function App() {

  return (

      <>

          <Header />
          <Profile name={"Eric Montiel López"} age={"24"} profession={"Desempleado"} />
          <Skill text={"React"} />
          <Skill text={"Java"} />
          <Footer year={"2026"} />

      </>

  )

}

export default App
