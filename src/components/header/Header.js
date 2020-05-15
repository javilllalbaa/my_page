import React, { Component } from 'react'
import { PeopleCircle, XDiamond, Briefcase, Download } from 'react-bootstrap-icons';
import { menu, pdf } from './../../constants'
import base64 from 'base64topdf'

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

	printMenu(e){
		alert("En construccion...")
	}

	Information(e){
		if(e === 1){
			var byteCharacters = atob(pdf);
			var byteNumbers = new Array(byteCharacters.length);
			for (var i = 0; i < byteCharacters.length; i++) {
			byteNumbers[i] = byteCharacters.charCodeAt(i);
			}
			var byteArray = new Uint8Array(byteNumbers);
			var file = new Blob([byteArray], { type: 'application/pdf;base64' });
			var fileURL = URL.createObjectURL(file);
			window.open(fileURL);
		}else if(e === 2){
			window.open("https://github.com/javilllalbaa");
		}else if(e === 3){
			window.open("https://www.linkedin.com/in/javier-alexander-villalba-52814959/");
		}
	}

	render(){
		this.state.lista = menu
		return (
			<div className="header">
				<div className="header_sup">
					<div className="col_header"><p></p></div>
					<div className="col_header logo">
						<XDiamond className="logo" size={60} />
						<p>Page</p>
					</div>
					<div className="col_header sub_menu center-v">
						<div onClick={() => this.Information(1)}>
							<Download className="img_icon" size="45"/>
							<p>Perfil</p>
						</div>
						<div onClick={() => this.Information(2)}>
							<Briefcase className="img_icon" size="45"/>
							<p>Github</p>
						</div>
						<div onClick={() => this.Information(3)}>
							<PeopleCircle className="img_icon" size="45"/>
							<p>Linkedin</p>
						</div>
					</div>
				</div>
				<div>
					<div className="firts_tit center-v">
						<p>Hello welcome</p>
					</div>
					<div className="firts_tit center-v second_tit">
						<p>to the page</p>
					</div>
				</div>
				<div className="list_header">
					<ul>
						{   
							this.state.lista.map( (item, index) => 
								<li key={index} onClick={() => this.printMenu(item)}>
									{item.text}
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