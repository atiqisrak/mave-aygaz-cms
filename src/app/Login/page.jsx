"use client";

import React, {useEffect, useRef} from 'react';
import Site from '../Site/page';
import lottie from 'lottie-web';
import {
    Button,
    Cascader,
    Col,
    DatePicker,
    Divider,
    Form,
    Input,
    InputNumber,
    Radio,
    Row,
    Select,
    Space,
    Switch,
    TreeSelect,
  } from 'antd';
const Login = () => {

    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./hello.json'),
        })
    },[]);

  return (
    <div  className="login-page">
    <Site/>
    <section className="login-page-section">
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={12}>
        <div className="login-content">
          {/* <img src="http://localhost:3000/images/mave_logo_horizontal.png" width={"100%"} alt="" /> */}
        <h1>Hey, Hello <img src="/images/hands.png" width={40} height={40} alt=" adft" /></h1> 
            <p>Enter the information correctly</p>
        </div>
        <div style={{marginTop:"1rem"}}>
        <strong>Email</strong>
        <Input placeholder='Email' className='input-field' />
        </div>
       
        <div style={{marginTop:"1rem"}}>
      <strong>Password</strong>
      <Input placeholder='Password' className='input-field' />
    </div>
     
  
    <div style={{marginTop:"1rem"}}>
    <strong >Confirm Password</strong>
    <Input placeholder='Confirm Password'className='input-field'  />
    </div>
    <Space direction="vertical" style={{ width: '100%',marginTop:"1rem",}}>
    <Button type="primary" block className='buttons'>
      Login
    </Button>
    </Space>

    <Divider>Or</Divider>
    <Button  block  style={{ height:"40px",fontSize:"18px",fontWeight:700,display:"flex",justifyContent:"center",alignItems:"center",rowGap:"1rem"}}>
   <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="" style={{marginRight:"1rem"}} /> Sign up with Google
    </Button>
      </Col>
      <Col className="gutter-row" span={12}>
        <div className="pp" ref={container}>

        </div>
      </Col>
     
    </Row>


    </section>
    
     
    </div>
  )
}

export default Login
