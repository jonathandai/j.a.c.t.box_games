import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import AddForm from './AddForm.js'
import HomePage from './HomePage.js'
import PhotosDisplay from './PhotosDisplay.js'

import {BrowserRouter, Route, Link} from 'react-router-dom'

class App extends Component {
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
    return (
      <BrowserRouter>
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>MOCKUPS</h1>
            </div>
        </header>
        <div className='container'>
        <Link to="/form">
          <h6>Test Form</h6>
        </Link>
        <Link to="/display">
          <h6>Test Display</h6>
        </Link>
          <section className="add-item">
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
              <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
              <button>Add Item</button>
            </form>
          </section>
        </div>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/form" component={AddForm}/>
        <Route exact path="/display" component={PhotosDisplay}/>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
