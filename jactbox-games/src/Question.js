import React, { Component } from 'react';
import './Question.css';
class Question extends Component {

	constructor() {
    super();
    var people= ['astronauts', 'teachers', 'kids', 'firefighters', 'aliens', 'puppies', 'travelers'];
    var problems= ['get to school', 'have a garden', 'make friends', 'throw a party', 'go to the beach', 'be healthy'];
    var constraints= ['underwater', 'very european', 'green', 'not using technology','lighter than a brick', 'quick'];
    console.log(this.props);
    this.state = {
	  person: people[Math.floor(Math.random() * 6)],
	  problem: problems[Math.floor(Math.random() * 6)],
	  constraint: constraints[Math.floor(Math.random() * 6)],
    }

  }

	componentWillMount(){
		setTimeout(() => {
			this.props.history.push('/voting');
		}, 60000);
	}

  render() {
    return(
    	<div>
	    <div className='topBar'>
	    	YOUR CHALLENGE IS TO...
	    </div>
 		<div className="column left">
	 		<div className='problem'>
	        	help<br/><br/>
	            find a way to<br/><br/>
	            that is
	       </div>
       </div>
			 <div className="column right">
			 		<div className='topics'>
	           {this.state.person} <br/><br/>
	           {this.state.problem} <br/><br/>
	           {this.state.constraint} <br/><br/>
					</div>
			 </div>
			 </div>

  )
  }
}

export default Question;
