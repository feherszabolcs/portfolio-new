import './App.css'
import { Welcome } from './components/Welcome/Welcome'
import { About } from './components/About/About'
import { Switch } from './elements/ToggleSwitch/Switch'
import { useRef } from 'react'
import { DarkmodeProvider } from './elements/Darkmode/DarkmodeToggle'

function App() {

  const welcomeRef = useRef(null);  //navigation to another component -> pass these props with a type of any
  const aboutRef = useRef(null);


  return (
    <>
      <DarkmodeProvider>
        <Welcome aboutRef={aboutRef} />
        <Switch />

        <About aboutRef={aboutRef} welcomeRef={welcomeRef} />
      </DarkmodeProvider>
    </>
  )
}

export default App
