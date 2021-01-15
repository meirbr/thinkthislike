import React, { useState } from 'react';
import '../public/assets/style.scss';
import * as RB from 'react-bootstrap';
const Nav = (props) => {
  const [message, setMessage] = useState('waiting...');

  const onClick = () => setMessage('This is a react-ssr!');

  return (
      <div>  
    <RB.Navbar collapseOnSelect variant="dark" sticky="top" fixed="top" expand="lg" className="bg-blue nvbr-rspnsv">
    <img src="/img/owl.svg" style={{height: "6vh"}} className="hide-on-pc"/>
    <RB.Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-hamburger" />
  <RB.Navbar.Collapse id="basic-navbar-nav">
  <RB.Form inline className="rtl">
        <RB.FormControl type="text" placeholder="חפש באתר" className="mr-sm-2" />
        <RB.Button variant="outline-info" style={{marginRight: "1vh"}}>חפש</RB.Button>
      </RB.Form>
      
      <RB.Nav className="ml-auto rtl" style={{color: "#f8f9fb"}}>
      <img src="/img/owl.svg" style={{height: "6vh"}} className="hide-on-mobile" />
        <RB.Nav.Link href="/index" style={{color: "#f8f9fb"}}>דף הבית</RB.Nav.Link>
        <RB.Nav.Link href="/index#hot_products"  style={{color: "#f8f9fb"}}>מוצרים</RB.Nav.Link>
      </RB.Nav>
      </RB.Navbar.Collapse>
      
    </RB.Navbar>
  </div>
  );
};

export default Nav;
