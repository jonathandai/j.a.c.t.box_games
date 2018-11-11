import React, { Component } from 'react';
import firebase from './firebase.js';
import './phone.css';
import {BrowserRouter, Route, Link, browserHistory} from 'react-router-dom';

class PhoneHome extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
  }

  handleSubmit(e) {
  e.preventDefault();
  const itemsRef = firebase.database().ref('items');
  const item = {
    user: this.state.username,
    numVotes: 0,
    img: ""
  }

  itemsRef.push(item);
  this.setState({
    username: ""
  });
  var url = "/phone/lobby/" + this.state.username
  this.props.history.push(url)
}

  render() {
    return(
      <div className="phone">
              <div className='wrapper'>
                <h1>MOCKUPS</h1>
                <div className='formField'>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
                  <button type="Submit" class="phone-button" onClick={this.handleSubmit}>join game</button>
                </form>
                  </div>
              </div>
      </div>
  )
  }
}

export default PhoneHome;
