import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import footerCss from './footer.css';


export default class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<div className="footer-inner">
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
				</div>
				<div>
					<img className='footer-logo' src="vcu_logo.png"/>
				</div>
				<p>You can find the National Theta Tau website at <a href="www.thetatau.org">ThetaTau.org</a> </p>
			</div>
		);
	}
}