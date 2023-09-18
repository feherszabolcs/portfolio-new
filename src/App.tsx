import './App.css'
import { Welcome } from './components/Welcome/Welcome'
import { About } from './components/About/About'
import { useRef } from 'react'

function App() {

  const ref = useRef<HTMLDivElement>(null)

  const handleContactClick = () => {
    ref.current?.scrollIntoView()
  }


  return (
    <>
      <Welcome handleClick={handleContactClick} />
      <About ref={ref} />
    </>
  )
}

export default App
