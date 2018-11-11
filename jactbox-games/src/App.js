import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import AddForm from './AddForm.js'
import HomePage from './HomePage.js'
import PhotosDisplay from './PhotosDisplay.js'
import Players from './Players.js'
import PhoneHome from './phoneHome.js';
import PhoneLobby from './PhoneLobby.js'
import Rules from "./Rules.js"
import Question from "./Question.js"
import PhoneCanvas from "./PhoneCanvas.js"
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Voting from "./Voting.js"
import PhoneVoting from "./PhoneVoting.js"
import Winner from "./Winner.js"
import PhoneEnd from "./PhoneEnd.js"

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
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/form" component={AddForm}/>
        <Route exact path="/display" component={PhotosDisplay}/>
        <Route exact path="/phone/home" component={PhoneHome}/>
        <Route exact path="/phone/lobby/:id" component={PhoneLobby}/>
        <Route exact path="/players" component={Players}/>
        <Route exact path="/Rules" component={Rules}/>
        <Route exact path="/Question" component={Question}/>
        <Route exact path="/phone/voting/:id" component={PhoneVoting}/>
        <Route exact path="/phone/canvas/:id" component={PhoneCanvas}/>
        <Route exact path="/Voting" component={Voting}/>
        <Route exact path="/winner" component={Winner}/>
        <Route exact path="/phone/end" component={PhoneEnd}/>

      </div>
      </BrowserRouter>
    );
  }
}
export default App;
