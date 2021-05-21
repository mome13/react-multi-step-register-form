import React, {useState} from 'react';
import {Col, Row, Form, Button, Input, Steps} from 'antd'
import {RightCircleFilled } from '@ant-design/icons'
import logo from '../logo.svg'
import { SwitchTransition, CSSTransition } from "react-transition-group";

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

    const [current, setCurrent] = useState(0);

    const next = () => {
        if (current < 2){
            setCurrent(current + 1);
        }else{
            setCurrent(2);
        }
    };

    const prev = () => {
        if (current > 0){
            setCurrent(current - 1);
        }else{
            setCurrent(0);
        }
    };


    const formSteps = [
        <>
            <Form.Item
            name='email'
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
            <Input placeholder="email@example.com" autoComplete="on" autoCorrect="false" autoCapitalize="off" spellCheck="false" />
        </Form.Item>
            <Form.Item
                name='name'
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
                <Input placeholder="John Doe" autoComplete="on" autoCorrect="false" autoCapitalize="off" spellCheck="false" />
            </Form.Item>
        </>,
        <>
            <Form.Item
                name='password'
                rules={[
                    {
                        type:'password',
                        message: 'Password is not valid',
                    },
                    {
                        required: true,
                        message: 'Password is required',
                    },
                ]}
            >
                <Input placeholder="your password" type='password' autoComplete="off" autoCorrect="false" autoCapitalize="off" spellCheck="false" />
            </Form.Item>
            <Form.Item
                name='name'
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
                <Input placeholder="repeat password" autoComplete="of" autoCorrect="false" autoCapitalize="off" spellCheck="false" />
            </Form.Item>
        </>,
        <>
            <Form.Item
                name='security-name'
                rules={[
                    {
                        type:'string',
                    },
                    {
                        required: false,
                    },
                ]}
            >
                <Input placeholder="Security one" autoComplete="off" autoCorrect="false" autoCapitalize="off" spellCheck="false" />
            </Form.Item>
            <Form.Item
                name='security-owner'
                rules={[
                    {
                        type:'string',
                    },
                    {
                        required: false,
                    },
                ]}
            >
                <Input placeholder="Lisa Doe" autoComplete="off" autoCorrect="false" autoCapitalize="off" spellCheck="false" />
            </Form.Item>
        </>,
    ]


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

                        <SwitchTransition>
                            <CSSTransition
                                key={current}
                                addEndListener={(node, done) => {
                                    node.addEventListener("transitionend", done, false);
                                }}
                                classNames="fade"
                            >
                                    <Form
                                        layout="horizontal"
                                        // form={form}
                                        name="login"
                                        onFinish={next}
                                        scrollToFirstError
                                        style={{width:'80%', margin:'20px auto 10px'}}
                                    >
                                        {formSteps[current]}
                                    </Form>
                            </CSSTransition>
                        </SwitchTransition>


                        <div style={{display:'flex', flexDirection:'row' , alignItems:'center', alignContent:'center'}}>
                            <Button onClick={() => next()} type="primary" htmlType="primary">
                                salam
                            </Button>
                            <Button onClick={() => prev()} type="secondary" >
                                salam
                            </Button>
                        </div>

                    </Col>
                    </Row>
        </div>
    );
};

export default MainLayout;
