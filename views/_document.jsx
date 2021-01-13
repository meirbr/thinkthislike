import React from 'react';
//import icon from '../public/assets/img/owl.svg';
import {
  Document,
  Head,
  Main,
} from '@react-ssr/express';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Think This Like</title>
          <link rel="icon" href="/img/owl.svg"></link>
        </Head>
        <body>
          <Main />
        </body>
      </html>
    );
  }
};
