import React from 'react';
import {Spin, Card, Col, Row} from 'antd'
import {RightCircleFilled } from '@ant-design/icons'



const MainLayout = () => {

    return (
        <div className="MainLayout">
            <Col offset={3} span={18} style={{height:'100%'}}>
                    <Row style={{height:'100%', background:'#fff', borderRadius:'30px'}}>
                    <Col  span={8} style={{height:'100%', background:'#ffd700', borderTopLeftRadius:'30px', borderBottomLeftRadius:'30px', padding:'20px'}}>
                        <p>this is left</p>
                        {/*<h2>Lets get you set up</h2>*/}
                        {/*<p>It should only take a couple of minutes to pair with your watch</p>*/}
                        {/*<RightCircleFilled style={{ fontSize: '280%'}} />*/}
                    </Col>
                    <Col  span={16} style={{height:'100%', borderTopRightRadius:'30px', borderBottomRightRadius:'30px', padding:'20px'}}>
                        <p>this is right</p>
                    </Col>
                    </Row>
            </Col>
        </div>
    );
};

export default MainLayout;
