import React, { useState, useEffect } from 'react';
import '../public/assets/style.scss';
import * as RB from 'react-bootstrap';
import imgData from './imgCrslData.json';
//import Coverflow from 'react-coverflow';

const Crsl = (props) => {
  return (
      <div>
        <div>
        </div>
        <div>
          <RB.Carousel
          controls={false}
          indicators={false}
          className="crsl">
              
              {imgData.images.map((thing) => {
           // Return the element. Also pass key     
           return (<RB.Carousel.Item interval={1000}
            key={thing.key}
            >
                 <img
            className="d-block w-100"
            src={thing.url}
            alt="First slide"
            style={{height: "40vh", width: "40vh"}}
    />
            </RB.Carousel.Item>) 
        })}
           </RB.Carousel>   
           </div>
  </div>
  );
};

export default Crsl;
