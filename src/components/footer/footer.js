import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</div>
		);
	}
}