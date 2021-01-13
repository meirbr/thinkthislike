import React, { useState } from 'react';
import { Head } from '@react-ssr/express';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/style.scss';
import axios from 'axios';
import * as RB from 'react-bootstrap';
import Nav from './nav';
import Coverflow from './overflow';
import HotProducts from './hotproducts'
import { motion } from "framer-motion"

class Index extends React.Component{
    constructor(props){
      super(props);
      this.state = {}
    }

render(){
  
  return (
    <React.Fragment className="rtl" style={{width: "100vh"}}>
      <Head>
        <title>תחשוב על זה ככה</title>
      </Head>
      <Nav className="rtl" />
    <div className="intro">
      <RB.Container fluid className="rtl">
        <RB.Row className="rtl">
        <RB.Col className="intro-wlcm rtl">
          <motion.img animate={{ opacity: 1, y: 0 }} initial={{opacity: 0, y: 5}} transition={{delay: 0.5}} src="img/owl.svg" />
          <motion.h1 animate={{ opacity: 1 }} initial={{opacity: 0}} transition={{delay: 0.5, duration: 2}} >תחשוב על זה ככה</motion.h1>
          <motion.h2 animate={{ opacity: 1 }} initial={{opacity: 0}} transition={{delay: 0.5, duration: 2}} >המוצרים הכי מעניינים באינטרנט</motion.h2>
          { /* <h3>מצאתם דיל יותר שווה?
           <a href="#contact"> ספרו לנו</a>*
          </h3> */}
           <a href="#hot_products"><motion.img 
           animate={{ opacity: 1, y: [0, -5, 0, -5, 0, -5, 0] }} initial={{opacity: 0}} transition={{delay: 0.5, duration: 2}} 
           className="img-down"
           href="#hot_products" 
           src="https://www.flaticon.com/svg/static/icons/svg/892/892623.svg" />
           </a>
        </RB.Col>
        <RB.Col style={{width: "50%"}}>
          <motion.div animate={{x:0, opacity: 1}} initial={{x: -3, opacity: 0}} transition={{delay: 1.5, duration: 1}}>
          <Coverflow style={{height: "50vh"}} />
          </motion.div>
          </RB.Col>
          </RB.Row>
        </RB.Container>
    <div className="hot-products" id="hot_products">
    <HotProducts />
    </div>
    </div>
    </React.Fragment>
  )
}
}

export default Index;
