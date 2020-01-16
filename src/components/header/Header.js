import React, { Component } from 'react'
//import { get_Menu } from './../../actions'
import { getAxios } from './../../services'

/*img*/
import logo from './../../assets/img/logo.png'
import location from './../../assets/img/location.png'

/*css*/
import './Header.scss'

class Header extends Component{

	constructor(props) {
		super(props);
		this.state = {
			lista: [] 
		}
	}

	componentDidMount(){
		getAxios('menu')
		.then(response => {
			this.setState({
				lista : response.data 
			})
		})
	}

	printMenu(e){
		console.log("Menu seleccionado...", e)
	}

	render(){
		var test = this.props.menu.data !== undefined ? this.props.menu.data[0].title : ''
		return (
			<div className="header">
				<div className="header_sup">
					<div className="col_header"><p></p></div>
					<div className="col_header logo">
						<img src={logo} alt="" />
						<p>LOGOTEXT</p>
					</div>
					<div className="col_header sub_menu center-v">
						<div onClick={() => this.test()}>
							<img src={location} alt="" />
							<p>Tiendas {test}</p>
						</div>
						<div className="list">
							<img src={location} alt="" />
							<p>Lista de deseos</p>
						</div>
						<div>
							<img src={location} alt="" />
							<p>Mi bolsa</p>
						</div>
					</div>
				</div>
				<div>
					<div className="firts_tit center-v">
						<p>ENVÍO GRATIS X COMPRA</p>
					</div>
					<div className="firts_tit center-v second_tit">
						<p>SUPERIOR A $150.000</p>
					</div>
				</div>
				<div className="list_header">
					<ul>
						{   
							this.state.lista.map( (item, index) => 
								<li key={index} onClick={() => this.printMenu(item)}>
									{item.title}
								</li>
							)
						}
					</ul>
				</div>
			</div> 
		)
	}
}

export default Header;