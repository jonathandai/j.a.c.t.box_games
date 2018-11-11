import React, { Component } from 'react';
import firebase from './firebase.js';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Winner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[]
    }
    this.findWinner()
  }

clearDB(){
  const itemsRef = firebase.database().ref('items');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    for (let item in items) {
      this.removeItem(item.id)
    }
  })
}

findWinner(){
  const itemsRef = firebase.database().ref('items');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    var winnerVotes = 0;
    var winnerUser = "";
    for (let item in items) {
        if(items[item].numVotes > winnerVotes){
            winnerVotes = items[item].numVotes
            winnerUser = items[item].user
        }
        else if(items[item].numVotes == winnerVotes){
          winnerUser = winnerUser + ", " + items[item].user
        }
    }
    this.setState({
      items: winnerUser
    });
  });
}

render(){
  return(
    <div>
      <div className='top'> Winner is:  </div>
      <div className='sub'> {this.state.items} </div>
      <Link to="/">
        <button>start over</button>
      </Link>
    </div>
  )
}
}

export default Winner;
