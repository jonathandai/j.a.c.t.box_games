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
        <div style={{width:"70%", display:"inline-block"}}>
          <PhotosDisplay/>
        </div>
        <div style={{width:"30%", color:"white", textAlign:"center", display:"inline-block", verticalAlign:"top"}}>
              <h3>Go to:</h3>
              <h4>10.140.8.28:3000/phone/home</h4>
              <br/><br/>
              <Link to="/rules">
                <button style={{border:"5px solid #fff", background:"transparent", boxShadow:"none", fontFamily:"Montserrat", fontWeight:"bold", padding:"10px 30px", verticalAlign:"top"}}>start game</button>
              </Link>
        </div>
      </div>
  )
  }
}

export default Players;
