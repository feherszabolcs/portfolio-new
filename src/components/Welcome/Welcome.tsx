import 'bootstrap/dist/css/bootstrap.css'
import ReactTyped from 'react-typed'
import './welcome.css'
import Lottie from 'lottie-react'
import bgAnimation from '../../assets/Animation - 1695021585645.json'
import { useContext } from 'react'
import { DarkModeContext } from '../../elements/Darkmode/DarkmodeToggle'

const handeScroll = (ref: any) => {
    window.scrollTo({
        top: ref.offsetTop,
        left: 0,
        behavior: 'smooth'
    })
}

export const Welcome = ({ welcomeRef, aboutRef }: any) => {

    // eslint-disable-next-line
    const { darkMode }: any = useContext(DarkModeContext);
    return (
        <div className={darkMode ? 'welcome-body container-dark' : 'welcome-body container-light'} ref={welcomeRef}>
            <Lottie animationData={bgAnimation} />
            <div className='animated-typing'>
                <ReactTyped strings={["Hi!", "I'm Szabolcs Fehér.", "A web and software developer.", "Feel free to contact me."]}
                    typeSpeed={150}
                    backSpeed={150}
                    loop
                />
            </div>
            <div >
                <button className='btn btn-outline-primary contact-button' onClick={() => { handeScroll(aboutRef.current) }}>Contact me!</button>
            </div>
        </div>
    )
}
