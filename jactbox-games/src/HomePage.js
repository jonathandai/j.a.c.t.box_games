import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return(
      <div className="home-container">
        <header>
            <div className='wrapper'>
              <h1>MOCKUPS</h1>
            </div>
        </header>
        <button className='home-button'>host a game</button>
      </div>
  )
  }
}

export default HomePage;
