import React, { Component } from 'react';
import pillarsCss from './pillars.css';

export default class Pillars extends Component { 
	render() {
		return (
		<div className="Pillars">

			<p className="pillar-intro"> Theta Tau is a co-ed professional engineering fraternity. Our chapter at Virginia Commonwealth University is a close knit brotherhood that encourages its members to excel professionally and give back to the surrounding community.</p>
			<div className="pillar-container">
			<div className="pillar left-most">
				<div>
				<div className="image-container">
					<img className="pillar-picture" src="service.jpg"/>
				</div>
				<p>Service</p>
				<p>This is a paragraph about professionalism</p>
				</div>
			</div>
			<div className="pillar">
				<div>
				<div className="image-container">
					<img className="pillar-picture" src="professionalism.jpg"/>
				</div>
				<p>Professionalism</p>
				<p>This is a paragraph about professionalism</p>
				</div>
			</div>
			<div className="pillar">
				<div>
				<div className="image-container">
					<img className="pillar-picture" src="paintball.jpg"/>
				</div>
				<p>Brotherhood</p>
				<p>This is a paragraph about professionalism</p>
				</div>
				</div>
			</div>
		</div>
		);
	}
}