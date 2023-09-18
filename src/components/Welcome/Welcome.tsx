import 'bootstrap/dist/css/bootstrap.css'
import ReactTyped from 'react-typed'
import './welcome.css'
import Lottie from 'lottie-react'
import bgAnimation from '../../assets/Animation - 1695021585645.json'

export const Welcome = () => {

    return (
        <div className='welcome-body'>
            <Lottie animationData={bgAnimation} />
            <div className='animated-typing'>
                <ReactTyped strings={["Hi!", "I'm Szabolcs Fehér.", "A web and software developer.", "Feel free to contact me."]}
                    typeSpeed={150}
                    backSpeed={150}
                    loop
                />
            </div>
            <div >
                <button className='btn btn-outline-primary contact-button'>Contact me!</button>
            </div>
        </div>
    )
}
