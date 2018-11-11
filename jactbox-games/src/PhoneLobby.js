import React, { Component } from 'react';
import firebase from './firebase.js';
import './phone.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class PhoneLobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.match.params.id,
      url: "/phone/canvas/" + this.props.match.params.id
    }
  }

  render() {
    return(
      <div className="phone">
        <div className="phone-lobby"><p>welcome, {this.state.user}
         <br/>waiting for other players to join</p></div>
        <Link to={this.state.url}>
          <button class="phone-button">start</button>
        </Link>
      </div>
  )
  }
}

export default PhoneLobby;
