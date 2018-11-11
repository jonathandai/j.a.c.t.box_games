import React, { Component } from 'react';
import './Question.css';
class Question extends Component {
  render() {
    return(
    	<div>
            <div className='topBar'>
              YOUR CHALLENGE IS TO...
              </div>

              
 			 <div class="column">
 			 <div className='problem'>
              find a way for <br/><br/><br/>
              to <br/><br/><br/>
              that is
              </div>
             </div>
			 <div class="column">
			<div className='topics'>
            some person <br/><br/>
            some problem<br/><br/>
            some constraint<br/><br/>
          
			</div>
			</div>
                         
         </div>
  )
  }
}

export default Question;

