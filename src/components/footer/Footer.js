import React, { Component } from 'react';

class Footer extends Component{
	render(){
		let year = new Date().getFullYear();
		return (
			<div className="footer">
				Copyright © {year} Smarchat
			</div>
		)
	}
}

export default Footer;