import React, { useState } from 'react';
import { Head } from '@react-ssr/express';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/style.scss';
const Reminder_1 = (props) => {
  const [message, setMessage] = useState('waiting...');

  const onClick = () => setMessage('This is a react-ssr!');

  return (
    
    <React.Fragment>
      <Head>
        <title>An example of @react-ssr/express</title>
      </Head>
      <p className="bg-blue">Hello {props.user.name}!</p>
      <Button variant="primary" onClick={onClick}>Click Me</Button>
      <p>Message from state: {message}</p>
      <h1>{props.user.age}</h1>
      <Button variant="link">Link</Button>
    </React.Fragment>
  );
};

export default Reminder_1;
