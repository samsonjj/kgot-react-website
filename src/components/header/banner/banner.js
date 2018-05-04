import React, { Component } from 'react';
import bannerCss from './banner.css';
import NavigationBar from '../navigationBar/navigationBar';

export default class Banner extends Component {
	render() {
		return (
			<div className="Banner">
				

				<div className="title">
					<img className="logo" src="./images/coat_of_arms.png" />
					<div className='text'>
						<p className="big_heading">Theta Tau</p>
						<p className="small_heading">Kappa Gamma</p>
					</div>
				</div>
				
				<NavigationBar />
			</div>
		);
	}
}