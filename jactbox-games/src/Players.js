import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import firebase from './firebase.js';
import PhotosDisplay from './PhotosDisplay.js'

class Players extends Component {
  constructor() {
    super();
    this.state = {
      gameId:"",
    }
  }

  render() {
    return(
      <div>
        <div className="photosDisplay">
          <PhotosDisplay/>
        </div>
        <div className="logInInstructions">
              <h3>Go to:</h3>
              <h4>10.140.8.28:3000/phone/home</h4>
              <br/><br/>
              
              <Link to="/rules">
                <button className="playersStart">start game</button>
              </Link>

        </div>
      </div>
  )
  }
}

export default Players;
