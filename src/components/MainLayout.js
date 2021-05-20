import React from 'react';
import {Col, Row, Form, Button, Input, Steps} from 'antd'
import {RightCircleFilled } from '@ant-design/icons'
import logo from '../logo.svg'

const { Step } = Steps;

const steps = [
    {
        title: 'Email',
        content: 'First-content',
    },
    {
        title: 'Password',
        content: 'Second-content',
    },
    {
        title: 'Security',
        content: 'Last-content',
    },
];

const MainLayout = () => {

    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };


    return (
        <div className="MainLayout">
                    <Row style={{height:'100%',
                        background:'#fff',
                        borderRadius:'30px',
                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                        transition: '0.3s'
                    }}>
                    <Col span={9}
                         style={{
                              height:'100%',
                              background:'#ffd700',
                              borderTopLeftRadius:'30px',
                              borderBottomLeftRadius:'30px',
                              padding:'20px',
                          }}>
                        <div>
                            <img style={{margin:'6rem auto 3rem auto', display: 'block', position:'relative'}} width={150} height={150}  alt='happy-girl' src={logo}/>
                            <h2 style={{textAlign:'center', margin:'2rem 0 1rem 0'}}>Let's get you set up</h2>
                            <p style={{textAlign:'center'}}>It should only take a couple of minutes to pair with your watch</p>
                            <RightCircleFilled style={{ fontSize: '280%', margin:'2rem auto', display: 'block'}} />
                        </div>
                    </Col>
                    <Col  span={15} style={{height:'100%',
                        borderTopRightRadius:'30px',
                        borderBottomRightRadius:'30px',
                        padding:'20px'}}>
                        <Steps style={{margin: '1rem auto', width:'80%'}} progressDot  current={current}>
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>

                        <Form
                            layout="horizontal"
                            // form={form}
                            name="login"
                            onFinish={next}
                            scrollToFirstError
                            requiredMark={false}
                        >
                            <Form.Item
                                name='email'
                                label='EMAIL'
                                rules={[
                                    {
                                        type:'email',
                                        message: 'EMAIL IS NOT VALID',
                                    },
                                    {
                                        required: true,
                                        message: 'EMAIL IS REQUIRED',
                                    },
                                ]}
                            >
                                <Input autoComplete="on" autoCorrect="false" autoCapitalize="off" spellCheck="false" />
                            </Form.Item>

                            <Form.Item
                                name='name'
                                label='Full name'
                                rules={[
                                    {
                                        type:'string',
                                        message: 'EMAIL IS NOT VALID',
                                    },
                                    {
                                        required: false,
                                    },
                                ]}
                            >
                                <Input autoComplete="on" autoCorrect="false" autoCapitalize="off" spellCheck="false" />
                            </Form.Item>
                            <div style={{display:'flex', flexDirection:'row' , alignItems:'center', alignContent:'center'}}>
                                <Button style={{}} type="primary" htmlType="submit">
                                    salam
                                </Button>
                                <Button onClick={() => prev()} style={{}} type="secondary" >
                                    salam
                                </Button>
                            </div>
                        </Form>
                    </Col>
                    </Row>
        </div>
    );
};

export default MainLayout;
