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
      this.state = {details: {username: '', password: ''},
      isVerified: true
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeUsername = this.handleChangeUsername.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    componentDidMount(){
      if(this.props.isVerified===true)
        window.location.href('/reminder_1');
    }

    handleSubmit(event){
      event.preventDefault();
      console.log("submitted");
      var newThis = this;
      axios({
        method: 'post',
        url: '/login',
        data: {
          details: this.state.details
        }
      })
      .then(function(res) {
        if(res.data.result === true) //needs changing
        window.location = '/index';
        else{
          console.log(res);
          newThis.setState({isVerified: false});
        }
      });
    }

    handleChangeUsername(event) {
      this.setState({details: {username: event.target.value, password: this.state.details.password}});
    }

    handleChangePassword(event) {
      this.setState({details: {username: this.state.details.username , password: event.target.value}});
    } 

render(){
  return (
    <React.Fragment>
      <Head>
        <title>התחבר</title>
      </Head>
      <Nav/>
      <div className="intro rtl">
      <RB.Container>
        <RB.Row className="login-wlcm">
          <RB.Col sm className="form">
        <RB.Form onSubmit={this.handleSubmit}>
          <div style={{display: "block", alignItems: "center", margin: "auto"}}>
          <RB.FormLabel>שם משתמש/טלפון/אימייל:</RB.FormLabel>
          <br />
          <input type="text" placeholder={this.state.details.username} id="username" name="username" onChange={this.handleChangeUsername} required/>
          <br />
          <RB.FormLabel>סיסמה:</RB.FormLabel>
          <br />
          <input type="text" id="username" name="username" onChange={this.handleChangePassword} required />
      <br />
      <RB.Button type="submit" value="submit">התחבר</RB.Button>
      <br />
      <label id="is_valid">{this.state.isVerified ? "" : "please check your details"}</label>
      </div>
    </RB.Form>
    </RB.Col>
          <RB.Col sm className="margins-of-form hide-on-mobile" style={{justifyContent: "center"}}>
            <img src="http://localhost:3000/img/owl.svg" style={{width: "10vh", margin: "auto"}}/>
            <br />
            <h1>כניסת מנהל</h1>
            <br />
            <h3>אתר מבית "תחשוב על זה ככה"</h3>
          </RB.Col>
          </RB.Row>
        </RB.Container>
        </div>
    </React.Fragment>
  )
}
}

export default Login;
