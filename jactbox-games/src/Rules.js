import React, { Component } from 'react';
import './Rules.css';
import {Link} from 'react-router-dom'
class Rules extends Component {
  render() {
    return(
            <div className='long-text'>
              <h1>You will have 60 seconds to draw an idea with the given constraints, and then 
vote on your favorite ones! </h1>
            
        <div className= 'wrapper'>
        <Link to="/question">
        <button className='rules-button'>Start</button>
        </Link>
      </div>
      </div>
  )
  }
}

export default Rules;
