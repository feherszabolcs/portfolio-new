import './About.css'
import { Progress } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { BiLogoGmail } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import ReactTyped from 'react-typed'


export function useIsVisible(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        );

        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}


export const About = () => {

    const [percent, setPercent] = useState(0);
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    useEffect(() => {
        setPercent(90)
    }, [])

    return (
        <div className='about-body'>
            <h1 id='about-title'><ReactTyped strings={["About me."]}
                typeSpeed={120}
                backSpeed={150}
                loop
            /></h1>
            <Row>
                <Col xs={11} sm={5} className='about-skills' ref={ref}>
                    <h3>My Skills</h3>
                    {isVisible && <Progress percent={percent} strokeColor="#F0DB4F" format={() => 'JS'} />}

                    <Progress percent={93} format={() => 'TS'} />
                    <Progress percent={89} format={() => 'CSS'} strokeColor="#264de4" />
                    <Progress percent={94} format={() => 'REACT'} strokeColor="#61dbfb" />
                    <Progress percent={95} format={() => 'HTML'} strokeColor="#e34c26" />
                    <Progress percent={90} format={() => 'C#'} strokeColor="#280068" />
                </Col>
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
            </Row>
        </div>
    )
}
