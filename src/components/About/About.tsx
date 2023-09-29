import './About.css'
import { useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import { BiLogoGmail } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import ReactTyped from 'react-typed'
import Lottie from 'lottie-react'
import { DarkModeContext } from '../../elements/Darkmode/DarkmodeToggle'


export const About = ({ aboutRef }: any) => {

    const { darkMode }: any = useContext(DarkModeContext)

    return (

        //todo: -timeline on the about page, a new contact page


        <div className={darkMode ? 'about-body dark-mode' : 'about-body light-mode'} ref={aboutRef}>
            <div className="about-container">
                <h1 className={darkMode ? 'about-title dark-mode' : 'about-title light-mode'}><ReactTyped strings={["About me."]}
                    typeSpeed={120}
                    backSpeed={150}
                    loop
                /></h1>
                <Row>
                    {/* <Col xs={11} sm={5} className='about-skills'>
                        <h3 ref={coLRef}>My Skills</h3>
                        <Progress percent={percentage} strokeColor="#F0DB4F" format={() => 'JS'} />
                    </Col> */}
                    <Col sm={5} xs={6} className='about-desc'>
                        <b>Hi!</b> I'm <i>Szabolcs</i> from Hungary, a young man, who loves programming. Right now I'm studying frontend developement in school.
                        This page is only for practicing and learning purposes only, but still feel free to get in touch with me!
                        <br /><AiFillHeart />
                        <hr />
                        <h2 id='#contacts'>My contacts:</h2>
                        <br />
                        <BiLogoGmail /> <b>e-mail:</b> feherszabi2005@gmail.com
                        <br />
                        <BsGithub /><b> github:</b> <a href="https://www.github.com/feherszabolcs" target='_blank'>github.com/feherszabolcs</a>
                    </Col>
                    <Col sm={5} xs={6}>
                        <i
                            className="fas fa-car-side fa-3x"
                            data-mdb-toggle="animation"
                            data-mdb-animation="slide-in-left"
                            data-mdb-animation-start="onScroll"
                        ></i>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
