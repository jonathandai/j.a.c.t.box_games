import React, { Component } from 'react';
import firebase from './firebase.js';
import './phone.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class PhoneLobby extends Component {
  render() {
    return(
      <div className="phone">
        <div className="phone-lobby">waiting for other players to join</div>
      </div>
  )
  }
}

export default PhoneLobby;
