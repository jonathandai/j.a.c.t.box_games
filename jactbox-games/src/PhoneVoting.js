import React, { Component } from 'react';
import firebase from './firebase.js';
import './phoneVoting.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class PhoneVoting extends Component {

  render() {
    return(
      <div className="phone">
        <div className="header"><h1>Vote!</h1></div>
        <div className="padding"></div>
        <div className="gallery">
          <div className="imgThrees">
            <div className="imgHolder"></div>
            <div className="imgHolder"></div>
            <div className="imgHolder"></div>
          </div>
          <div className="imgThrees">
            <div className="imgHolder"></div>
            <div className="imgHolder"></div>
            <div className="imgHolder"></div>
          </div>
        </div>
      </div>
  )
  }
}

export default PhoneVoting;
