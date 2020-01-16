import React, { Component } from 'react'
// import Header from '../components/header/Header'
import Header from '../containers/Header'
import { get_Menu } from './../actions'
import { UIView } from '@uirouter/react';

class Layout extends Component {

	constructor(props) {
		super(props)
		this.state = {
			statusSidebarWindows: true
		}
	}

	componentDidMount(){
		const { dispatch } = this.props
		dispatch(get_Menu())
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
