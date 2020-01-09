import React, { Component } from 'react'
import Header from '../components/header/Header'
import { UIView } from '@uirouter/react';

class Layout extends Component {

	constructor(props) {
		super(props)
		this.state = {
			statusSidebarWindows: true
		}
	}

	render() {
		return (
			<div>
				<Header />
				<div>
					<div>
						<UIView transition={this.props.transition}  />
					</div>
				</div>
			</div>
		)
	}
}

export default Layout;
