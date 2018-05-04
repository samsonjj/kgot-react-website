import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import bigPictureCss from './bigPicture.css';

export default class BigPicture extends Component {
	render() {
		return (
			<div className="picture-container">
				<div className="crop">
					<img className="big-image" src="./images/vcu_overhead.jpg" alt="vcu" />
				</div>
				<div className="text-centered">
					<p className="big">THETA TAU</p>
					<p className="small">AT VCU</p>
				</div>
			</div>
		);
	}
}