import './About.css'
import { Col, Row } from 'antd'

const style = {
    background: 'black',
    padding: '8px 0',
};

export const About = () => {
    return (
        <div className='about-body'>
            <h1 id='about-title'>About Me</h1>
            <Row gutter={24}>
                <Col className='gutter-row' span={8}>
                    <div style={style}></div>
                </Col>
                <Col className='gutter-row' span={8}>
                    <div style={style}></div>
                </Col>
                <Col className='gutter-row' span={8}>
                    <div style={style}></div>
                </Col>
            </Row>
        </div>
    )
}
