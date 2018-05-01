import React, { Component } from 'react';
import Banner from './banner/banner';
import NavigationBar from './navigationBar/navigationBar';

export default class Header extends Component {
	render() {
		return (

		<div className="Header" background-color="White">
			<Banner />
			<NavigationBar />
		</div>

		);
	}
}
