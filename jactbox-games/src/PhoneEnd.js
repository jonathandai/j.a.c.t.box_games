import React, { Component } from 'react';
import firebase from './firebase.js';
import './phone.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class PhoneEnd extends Component {
  render() {
    return(
      <div className="phone">
        <div className='endWrapper'>
          <h1>Thanks for Playing!</h1>
        </div>
      </div>
  )
  }
}

export default PhoneEnd;
