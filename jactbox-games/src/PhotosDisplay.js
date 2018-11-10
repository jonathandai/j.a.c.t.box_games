import React, { Component } from 'react';
import firebase from './firebase.js';

class PhotosDisplay extends Component {
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
    return(
      <section className='display-item'>
        <div className="wrapper">
          <ul>
          {this.state.items.map((item) => {
              return (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>brought by: {item.user}</p>
                  <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
                </li>
              )
            })
          }
          </ul>
        </div>
      </section>
  )
  }
}

export default PhotosDisplay;