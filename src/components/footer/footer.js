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
				<div id="footer-local">
					<img className='footer-logo' src="./images/vcu_logo.png"/>
					<div className='text'>
						<div>Contact our regent at kgot.regent@gmail.com</div>
						<div>or our scribe at kgot.scribe@gmail.com</div>
					</div>
				</div>
				<div>

				</div>
				<p className="footer-link">You can find the National Theta Tau website at <a href="www.thetatau.org">ThetaTau.org</a> </p>
			</div>
		);
	}
}