import React, { useState } from 'react';
import { Head } from '@react-ssr/express';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/style.scss';
import * as RB from 'react-bootstrap';
import Nav from './nav';
import { motion } from "framer-motion";
import axios from 'axios';

class Login extends React.Component{
    constructor(props){
      super(props);
      this.state = {}

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      if(this.props.isVerified===true)
        window.location.href('/reminder_1');
    }

    handleSubmit(event){
      event.preventDefault();
      console.log("submitted");

      axios({
        method: 'post',
        url: '/login',
        data: {
          item: "this.state.task"
        }
      })
      .then(function(response) {
        if(response.data.isVerified === true)
        window.location = '/index';
        else
        console.log(reponse.data);
      });
    }

render(){
  return (
    <React.Fragment>
      <Head>
        <title>התחבר</title>
      </Head>
      <Nav/>
      <RB.Container fluid className="login rtl">
        <RB.Row xs="2" className="login-wlcm rtl">
        <RB.Col className="rtl">
        <RB.Form onSubmit={this.handleSubmit}>
          <div className="login-form">
          <RB.FormLabel>שם משתמש/טלפון/אימייל:</RB.FormLabel>
          <input type="text" id="username" name="username" />
          <RB.FormLabel>סיסמה:</RB.FormLabel>
          <input type="text" id="username" name="username" />
      <RB.Button type="submit" value="submit">התחבר</RB.Button></div>
    </RB.Form>
          </RB.Col>
          <RB.Col className="margins-of-form hide-on-md">
            <RB.Container className="margins-of-form">
            <RB.Row>
            <img src="http://localhost:3000/img/owl.svg" className="form-img" />
            <h1>כניסת מנהל</h1>
            </RB.Row><RB.Row>
            <h3>אתר מבית "תחשוב על זה ככה"</h3>
            </RB.Row>
            <RB.Row stye={{color: "white"}}><h3>©</h3></RB.Row>
            </RB.Container>
          </RB.Col>
          </RB.Row>
        </RB.Container>
    </React.Fragment>
  )
}
}

export default Login;
