import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import BigPicture from '../bigPicture/bigPicture';
import Pillars from '../pillars/pillars';

export default class HomePage extends Component {
	render() {
		return (
			<div className="HomePage">
				<BigPicture />
				<div>
					<Pillars />
				</div>
			</div>
		);
	}
}