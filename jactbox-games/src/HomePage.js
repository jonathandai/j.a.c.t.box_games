import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import firebase from './firebase.js';
import './main.css';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      gameId:"",
    }
  }

  render() {
    return(
      <div className="home-container">
            <div className='rapper'>
              <h1>MOCKUPS</h1>


        <Link to="/players">
          <div className="button">host a game</div>
        </Link>
        </div>
      </div>
  )
  }
}

export default HomePage;
