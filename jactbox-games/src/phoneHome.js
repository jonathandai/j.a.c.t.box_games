import React, { Component } from 'react';
import firebase from './firebase.js';
import './phone.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class PhoneHome extends Component {
  render() {
    return(
      <div className="phone">
              <div className='wrapper'>
                <h1>MOCKUPS</h1>
                <div className='formField'>
                  <h3>Game Code</h3>
                </div>
                <div className='formField'>
                  <h3>Nickname</h3>
                </div>
                <Link to="/display">
                  <button>Join Game</button>
                </Link>
              </div>
      </div>
  )
  }
}

export default PhoneHome;
