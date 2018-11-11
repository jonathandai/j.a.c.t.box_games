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
    user: this.state.username
  }

  itemsRef.push(item);
  this.setState({
    username: ''
  });
  this.props.history.push('/phone/lobby')

}

  render() {
    return(
      <div className="phone">
              <div className='wrapper'>
                <h1>MOCKUPS</h1>
                <div className='formField'>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
                <Link to="/Phone/Lobby">
                  <button type="Submit" class="phone-button" onClick={this.handleSubmit}>join game</button>
                </Link>
                </form>
                  </div>
              </div>
      </div>
  )
  }
}

export default PhoneHome;
