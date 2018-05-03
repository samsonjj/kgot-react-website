import React, { Component } from 'react';
import brotherPageCss from './brotherPage.css';

export default class BrotherPage extends Component {

	constructor() {
		super();
		let rollNumbers = [254, 255, 256, 257, 258];
		let b = rollNumbers.map((rollNumber) => {
			return (
				<span className='brother-image-container'>
					<img className='brother-image' src={"./" + rollNumber + ".jpg"} />
				</span>
			);
		});
		this.state = {
			brothers: b
		}
	}

	render() {
		return (
			<div className="BrotherPage">
				This is the brother page.
				<div>
				{ this.state.brothers }
				</div>
			</div>
		);
	}
}