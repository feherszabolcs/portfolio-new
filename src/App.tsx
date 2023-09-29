import './App.css'
import { Welcome } from './components/Welcome/Welcome'
import { About } from './components/About/About'
import { Switch } from './elements/ToggleSwitch/Switch'
import { useContext, useRef } from 'react'
import { DarkModeContext, DarkmodeProvider } from './elements/Darkmode/DarkmodeToggle'

function App() {

  const welcomeRef = useRef(null);  //navigation to another component -> pass these props with a type of any
  const aboutRef = useRef(null);

  const { darkMode }: any = useContext(DarkModeContext)

  return (
    <div className={darkMode ? 'page-body dark-mode' : 'page-body light-mode'}>
      <DarkmodeProvider>
        <Welcome aboutRef={aboutRef} />
        <Switch />

        <About aboutRef={aboutRef} welcomeRef={welcomeRef} />
      </DarkmodeProvider>
    </div>
  )
}

export default App
