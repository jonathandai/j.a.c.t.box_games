import React, { Component } from 'react';
import './Rules.css';
import {Link} from 'react-router-dom'
class Rules extends Component {
  render() {
    return(
            <div className='long-text'>
              <h1>You will have 60 seconds to draw an idea with the given constraints, and then 
vote on your favorite ones! </h1>
        <Link to="/question">
        <button className='home-button'>Start</button>
        </Link>
      </div>
  )
  }
}

export default Rules;
