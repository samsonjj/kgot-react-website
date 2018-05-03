import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import navCss from './navigationBar.css';


export default class navigationBar extends Component {

	constructor() {
		super();
	}

	render() {
		return (
		<div class='navigation-bar-container'>
		<ul margin-right='120px'>
		  <li><Link to="/news">News</Link></li>
		  <li><Link to="/contact">Contact</Link></li>
		  <li><Link to="/brothers">Brothers</Link></li>
  		<li><Link to="/about">About</Link></li>
  		<li><Link to="/">Home</Link></li>
		</ul>
		</div>
		);
	}
}