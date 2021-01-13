import React, { useState } from 'react';
import { Head } from '@react-ssr/express';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/style.scss';
import axios from 'axios';
class Reminder_2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      postId: null,
      task: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({task: event.target.value});
    
  }

  handleSubmit(event) {
    event.preventDefault();
    var todo = {item: this.state.task};
    alert('A name was submitted: ' + this.state.task);
/*
    axios.post('/todo', {check: 'check'}); 
    .then((reponse) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    */

    axios({
      method: 'post',
      url: '/reminder_2',
      data: {
        item: this.state.task
      }
    })
    .then (() => {
      window.location.reload();
    })
  }

  render(){
    const { postId } = this.state;
  return (
    <React.Fragment>    <h1>Ninja todo List</h1>
    <div id="todo-table">
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="item" placeholder="Add new item..." onChange={this.handleChange} required />
            <button type="submit" value="submit">Add Item</button>
        </form>

        <h1>{postId}</h1>
        <h1>{this.props.dataB}</h1>
        <h1>{this.props.dataC}</h1>

        <ul>
              {this.props.data.array.map((thing) => {     
           console.log("Entered");
           // Return the element. Also pass key     
           return (<li>{thing.item}</li>) 
        })}
        </ul>

    </div>
      
    </React.Fragment>
  );
}
}

export default Reminder_2