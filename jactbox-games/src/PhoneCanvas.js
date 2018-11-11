import React, { Component } from 'react';
import firebase from './firebase.js';
import './phone.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class PhoneCanvas extends Component {
  render() {
    return(
      <div className="phone">
        <div className="canvas"></div>
      </div>
  )
  }
}

export default PhoneCanvas;

var drawingApp = (function () {

	"use strict";

	var canvas,
		context,
		canvasWidth = 667,
		canvasHeight = 375,
		colorPurple = "#cb3594",
		colorGreen = "#659b41",
		colorYellow = "#ffcf33",
		colorBrown = "#986928",
		outlineImage = new Image(),
		crayonImage = new Image(),
		markerImage = new Image(),
		eraserImage = new Image(),
		crayonBackgroundImage = new Image(),
		markerBackgroundImage = new Image(),
		eraserBackgroundImage = new Image(),
		crayonTextureImage = new Image(),
		clickX = [],
		clickY = [],
		clickColor = [],
		clickTool = [],
		clickSize = [],
		clickDrag = [],
		paint = false,
		curColor = colorPurple,
		curTool = "crayon",
		curSize = "normal",
		mediumStartX = 18,
		mediumStartY = 19,
		mediumImageWidth = 93,
		mediumImageHeight = 46,
		drawingAreaX = 111,
		drawingAreaY = 11,
		drawingAreaWidth = 267,
		drawingAreaHeight = 200,
		toolHotspotStartY = 23,
		toolHotspotHeight = 38,
		sizeHotspotStartY = 157,
		sizeHotspotHeight = 36,
		totalLoadResources = 8,
		curLoadResNum = 0,
		sizeHotspotWidthObject = {
			huge: 39,
			large: 25,
			normal: 18,
			small: 16
		}
})
