import React from 'react';
import {Spin, Card, Col, Row} from 'antd'
import {RightCircleFilled } from '@ant-design/icons'
import logo from '../logo.svg'



const MainLayout = () => {

    return (
        <div className="MainLayout">
            <Col offset={3} span={18} style={{height:'100%'}}>
                    <Row style={{height:'100%', background:'#fff', borderRadius:'30px'}}>
                    <Col  span={10}
                          style={{height:'100%',
                              background:'#ffd700',
                              borderTopLeftRadius:'30px',
                              borderBottomLeftRadius:'30px',
                              padding:'10px',

                          }}>
                        <div style={{}}>
                            <img style={{margin:'7rem auto 3rem auto', display: 'block'}} width={150} height={150} alt='happy-girl' src={logo}/>
                            <h2 style={{textAlign:'center', margin:'2rem 0 1rem 0'}}>Let's get you set up</h2>
                            <p style={{textAlign:'center'}}>It should only take a couple of minutes to pair with your watch</p>
                            <RightCircleFilled style={{ fontSize: '280%', margin:'2rem auto', display: 'block'}} />
                        </div>
                    </Col>
                    <Col  span={14} style={{height:'100%', borderTopRightRadius:'30px', borderBottomRightRadius:'30px', padding:'20px'}}>
                        <p>this is right</p>
                    </Col>
                    </Row>
            </Col>
        </div>
    );
};

export default MainLayout;
