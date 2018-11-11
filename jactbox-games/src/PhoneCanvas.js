import React, { Component } from 'react';
import firebase from './firebase.js';
import './phone.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import sdb from 'simple-drawing-board';
import DrawableCanvas from 'react-drawable-canvas';


class PhoneCanvas extends Component {
  constructor(props) {
   super(props);
   this.state = {
     brushColor: '#000000',
     lineWidth: 2,
     canvasStyle: {
       backgroundColor: '#FFFFFF'

     },
     clear: false
   }
 }
 handleOnClickClear() {
  this.setState({
    clear: true
  });
}
render() {
  const ops = {
    brushColor: '#800909',
    lineWidth: 4,
    canvasStyle: {
      backgroundColor: '#000000',
      borderColor: '#786B6B',
      borderStyle: 'solid'
    }
  };
  return (
    <div>
      <div className='canvas-state'>
      <div className='button-bar'>
        <button onClick={() => this.handleOnClickClear()}>clear all</button>
      </div>
      <DrawableCanvas {...this.state} />
      </div>
        <div className='canvasWrapper'>
          </div>
    </div>
  );
}
}

export default PhoneCanvas;





/*constructor(props) {
  super(props);
  this.myRef = React.createRef();
  var node = this.myRef.current;

}*/


/*
  render() {
    return(

      <div className="phone">
      <canvas id="canvas" width="667" height="375" }></canvas>
      <div className="canvasDiv"></div>
      </div>
  )
  export default PhoneCanvas;
  }*/
