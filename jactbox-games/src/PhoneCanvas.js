import React, { Component } from 'react';
import firebase from './firebase.js';
import './phone.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import sdb from 'simple-drawing-board';
import DrawableCanvas from 'react-drawable-canvas';
import html2canvas from 'html2canvas';

class PhoneCanvas extends Component {
  constructor(props) {
   super(props);
   this.state = {
     brushColor: '#000000',
     lineWidth: 2,
     canvasStyle: {
       backgroundColor: '#FFFFFF'
     },
     key: this.props.match.params.id,
     clear: false,

   }
    this.convertCanvasToImage = this.convertCanvasToImage.bind(this)
 }

  convertCanvasToImage(canvas) {
	var image = new Image();
  console.log(canvas);
  const body = document.querySelector('body')
  const can = document.querySelector('canvas')
  html2canvas(can).then(canvas => {
      let croppedCanvas = document.createElement('canvas')
     let croppedCanvasContext = croppedCanvas.getContext('2d')
     croppedCanvasContext.drawImage(canvas,667,375);
    let image = croppedCanvas.toDataURL('image/jpeg')})
     console.log(image);
     const itemsRef = firebase.database().ref('items');
     itemsRef.child(this.state.key).update({'img': can.toDataURL()})
     this.props.history.push('/phone/voting');

//	return image;
//this.props.onEndCapture(croppedCanvas.toDataURL())
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
    {this.state.user}
      <div className='canvas-state'>
      <div className='button-bar'>
        <button className = 'clear-button' onClick={() => this.handleOnClickClear()}>clear all</button>
      </div>

      <div className='button-bar'>
        <button className = 'next-button' onClick={() => this.convertCanvasToImage(this)}>submit!</button>
      </div>

      <div className = 'canvas-style'>
      <DrawableCanvas {...this.state} />
      </div>
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
