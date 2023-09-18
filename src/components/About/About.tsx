import './About.css'
import { Progress } from 'antd'
import { Row, Col } from 'react-bootstrap'
import { BiLogoGmail } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import ReactTyped from 'react-typed'
import Lottie from 'lottie-react'
import chairPerson from '../../assets/Animation - 1695025323106.json'
import { useEffect, useRef, useState } from 'react'

export const About = () => {
    const [percentage, setPercentage] = useState(0)
    const coLRef = useRef(null);

    useEffect(() => {
        setPercentage(94)
    }, [coLRef])

    return (
        <div className='about-body'>
            <h1 id='about-title'><ReactTyped strings={["About me."]}
                typeSpeed={120}
                backSpeed={150}
                loop
            /></h1>

            <Row>
                {/* <Col xs={11} sm={5} className='about-skills'>
                    <h3 ref={coLRef}>My Skills</h3>
                    <Progress percent={percentage} strokeColor="#F0DB4F" format={() => 'JS'} />
                </Col> */}
                <Col sm={5} xs={11} className='about-desc'>

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
                <Col>
                    <Lottie animationData={chairPerson} height={50} width={50} />
                </Col>
            </Row>
        </div>
    )
}
