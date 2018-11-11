import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import firebase from './firebase.js';

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
        <header>
            <div className='wrapper'>
              <h1>MOCKUPS</h1>
            </div>
        </header>
        <Link to="/players">
          <a className='home-button'>host a game</a>
        </Link>
      </div>
  )
  }
}

export default HomePage;
