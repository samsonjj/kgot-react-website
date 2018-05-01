import React, { Component } from 'react';
import bannerCss from './banner.css';

export default class Banner extends Component {
	render() {
		return (
			<div className="Banner">
					<div id="banner_td">
						<div id="banner">
							<table id="banner_table" align="center" border="0">
								<tr width='100%'>
									<td class="one_by_one">
											<img className="logo" src="./vcu_logo.png" height='150px' align="left"/>
									</td>
									<td width='100%'>
										<div className="banner-text">
										<p className="big_heading" margin-bottom='0px' margin-list='10px' align="left">Theta Tau <span font='Times New Roman'>&Kappa;&Gamma;</span></p>
										<p className="small_heading" margin-top='0px' align="left"><b>Engineering Leaders</b><i> for Service, Profession, and Brotherhood</i></p>
										</div>
									</td>
									<td className="one_by_one" alignt='right'>
										<img className="logo" src="./coat_of_arms.png" height='150px'align="right"/>
									</td>
								</tr>
							</table>
						</div>
					</div>
			</div>
		);
	}
}