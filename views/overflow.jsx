import React from 'react';
import Coverflow from 'react-coverflow';
import imgData from './imgCrslData.json';

class Overflow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {
    const fn = function () {
      //for just function
    }
    return (
      <div>
        <Coverflow
    width={960}
    height={480}
    displayQuantityOfSide={1}
    navigation={false}
    enableHeading={true}
    classes={{backgroundColor: 'rgb(0, 23, 23)'}}
    
  >
    {imgData.images.map((thing) => {
           return (
                 <img
                 key={thing.key}
            src={thing.url}
            alt={thing.alt} />)
        })}
  </Coverflow>
      </div>)
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }
}
export default Overflow;