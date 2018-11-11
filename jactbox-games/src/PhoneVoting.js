import React, { Component } from 'react';
import firebase from './firebase.js';
import './phoneVoting.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class PhoneVoting extends Component {
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

  componentDidMount() {
    {/* Items will be replaced with the firebase dictionary name (I think) */}
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }

    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  }

  render() {
    return(
      <div className="phone">
        <div className="header"><h1>Vote!</h1></div>
        <div className="padding"></div>
        <div className="gallery">
          {this.state.items.map((item) => {
              return (
                <div className="imgHolder" key={item.id}>
                  <button style={{display:"inline-block", width:"30px", minWidth:"30px"}} onClick={() => this.removeItem(item.id)}>X</button>
                </div>
              )
            })
          }
        </div>
      </div>
  )
  }
}

export default PhoneVoting;
