import React, { Component } from 'react';
import './Voting.css';
import firebase from './firebase.js';


class Voting extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      item: '',
      img: '',
      items:[]
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
          user: items[item].user,
          img: items[item].img
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
    	<div>
        <div className='top'> Time to Vote!</div>
        <div className='sub'> Select your favorite drawing</div>
        <div className="padding"></div>
        <div className="gallery">
          {this.state.items.map((item) => {
              return (
                <div className="imgHolder" key={item.id}>
                  <img src={item.img} style={{width:"162.48px",height:"90px"}}/>
                </div>
              )
            })
          }
      </div>
      </div>
  )
  }
}

export default Voting;
