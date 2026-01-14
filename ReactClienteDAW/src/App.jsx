import { useState } from 'react'

import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import {Profile} from "./components/Profile.jsx";
import Skill from "./components/Skill.jsx";

import './App.css'

function App() {

    const skills = ["Javascript", "jQuery", "Vue", "Angular", "React", "Node.js"];
    const [showSkills, setShowSkills] = useState(false);

  return (

      <>

          <Header />
          <Profile name={"Eric Montiel López"} age={"24"} profession={"Desempleado"} />

          <button onClick={ () => setShowSkills(!showSkills) } >Habilidades</button>
          <Skill array={skills} show={showSkills} />

          <Footer year={"2026"} />

      </>

  )

}

export default App
