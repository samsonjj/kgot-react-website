import React, { Component } from 'react';
import bannerCss from './banner.css';
import NavigationBar from '../navigationBar/navigationBar';

export default class Banner extends Component {
	render() {
		return (
			<div className="Banner">
				<div id="banner">
					<div>
						<div>
							<img className="logo" src="./coat_of_arms.png" height='70px'align="left"/>
						
							<div className="banner-text">
								<p className="big_heading" margin-bottom='0px' margin-list='10px' align="left">Theta Tau</p>
								<p className="small_heading" margin-top='0px' align="left">Kappa Gamma</p>
							</div>
						</div>
						<div>
							<NavigationBar />
						</div>
					</div>
				</div>
			</div>
		);
	}
}