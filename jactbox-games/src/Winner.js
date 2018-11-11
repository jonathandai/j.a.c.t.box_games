import React, { Component } from 'react';

class Winner extends Component {
}

clearDB(){
  const itemsRef = firebase.database().ref('items');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    for (let item in items) {
      this.removeItem(item.id)
    }
  }
}

findWinner(){
  const itemsRef = firebase.database().ref('items');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    var winner = items[0];
    for (let item in items) {
      if (item.numVotes > winner.numVotes){
        winner = item;
      }
    }
    this.setState({
      items: winner
    });
  });
}

render(){
  return(
    <div>
      <div className='top'> Winner is:  </div>
      <div className='sub'> </div>
    </div>
  )
}

export default Winner;
