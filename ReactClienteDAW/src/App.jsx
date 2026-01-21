import { useState } from 'react'
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Profile } from "./components/Profile.jsx";
import Skill from "./components/Skill.jsx";
import Contact from "./components/Contact.jsx";
import { TaskList } from "./components/api/TaskList.jsx";
import './App.css'

function App() {
    const skills = ["Javascript", "jQuery", "Vue", "Angular", "React", "Node.js"];
    const [showSkills, setShowSkills] = useState(false);
    const [showContact, setShowContact] = useState(false);

    return (
        <>
            <Header />
            <Profile name={"Eric Montiel López"} age={"24"} profession={"Desempleado"} />

            <button onClick={() => setShowContact(!showContact)}>Contacto</button>
            <Contact email={"ericml2010g@gmail.com"} phone={"689960679"} show={showContact} />

            <button onClick={() => setShowSkills(!showSkills)}>Habilidades</button>
            <Skill array={skills} show={showSkills} />

            <TaskList />

            <Footer year={"2026"} />
        </>
    )
}

export default App