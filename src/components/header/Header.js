import React, { Component } from 'react';

class Header extends Component{
	render(){
		let year = new Date().getFullYear();
		return (
			<div className="footer">
				This is "Header"
			</div>
		)
	}
}

export default Header;