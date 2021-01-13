import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/style.scss';
import axios from 'axios';
import * as RB from 'react-bootstrap';
import imgPrdcts from './imgPrsdcts.json'

class HotProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="hot-products">
          <RB.Container>
            <RB.Row>
              <RB.Col  className="pick_category">
              <RB.ButtonGroup>
                <RB.Button  margin="1px">מתנה</RB.Button>
                <RB.Button>ביגוד</RB.Button>
                <RB.Button>נעליים</RB.Button>
                <RB.Button>גאדג'טים</RB.Button>
              </RB.ButtonGroup>
              </RB.Col>
            </RB.Row>
              <RB.Row>
              {imgPrdcts.img_prdcts.map((thing) => {
           return (
            <RB.Col xs={6} md={4}  key={thing.key} className="single-prdct" href={thing.link}>
            <RB.Image key={thing.key} src={thing.src} roundedCircle className="img-prdct" />
              <h4 key={thing.key}>{thing.name}</h4>
              </RB.Col>)
        }) }
              </RB.Row>
          </RB.Container>
      </div>)
  }
}
export default HotProducts;