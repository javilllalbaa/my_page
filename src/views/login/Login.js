import React, { Component } from 'react'
import { Formik, withFormik } from 'formik'
import { X, Circle } from 'react-bootstrap-icons';
import * as Yup from 'yup'
import { city } from '../../constants'
import ApolloClient, { gql } from "apollo-boost"
import { Query } from "react-apollo";

//import { getAxios } from './../../services'

/*img*/
import img_1 from './../../assets/img/img_1.jpg'

/*css*/
import './Login.scss'

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
})

class Login extends Component{

      
	constructor(props) {
		super(props);
		this.state = {
            tit_1: 'Ingrese sus datos',
            tit_2: "Tu turno ",
            matrix:[],
            player_one: true,
            player_two: false,
            player_one_name: "",
            player_two_name: "",
            num_turn: 0,
            status: false,
            finished: false 
        }
        this.validate = this.validate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    componentDidMount(){
        //debugger
        
        client
        .query({
            query: gql`
            {
                characters {
                  results {
                    id
                    name
                   test
                  }
                }
              }
            `
        })
        .then(result => {
            debugger
        });

    }

    onSubmit(values) {
        //debugger
        // this.setState({
        //     player_one_name: values.player_one,
        //     player_two_name: values.player_two,
        //     status: true,
        //     tit_1:  "Comencemos a jugar"
        // })
    }

    success(){
        this.setState({
            finished: true,
            tit_2: "Ganaste ",
            player_one_name: this.state.player_two_name,
            player_two_name: this.state.player_one_name
        })
    }

    playerTurn(valor, x, y){
        if(this.state.status && !this.state.finished){
            if(!this.state.matrix[x][y].value){
                if(this.state.player_one){
                    this.state.matrix[x][y].value = true
                    this.state.matrix[x][y].player_one = true
                    this.state.player_one = false
                    this.state.player_two = true
                }else if(this.state.player_two){
                    this.state.matrix[x][y].value = true
                    this.state.matrix[x][y].player_two = true
                    this.state.player_two = false
                    this.state.player_one = true
                }
                this.state.num_turn = this.state.num_turn + 1
                if(this.state.num_turn > 4){
                    this.valid(this.state.matrix)
                }
                this.setState({
                    num_turn: this.state.num_turn,
                    matrix: this.state.matrix,
                    player_one: this.state.player_one,
                    player_two: this.state.player_two
                })
            }
        }
        if(this.state.num_turn === 9){
            this.setState({
                tit_2: "Empate",
                finished: true
            })
        }
    }
    
    validate(values) {
        return Yup.object().shape(
            {
                email:
                    Yup
                        .string()
                        .required('Campo requerido'),
                password:
                    Yup
                        .string()
                        .required('Campo requerido'),
            })
    }

	render(){
        this.state.city = city
		return (
			<div className="login">
                <div className="get_login">
                    <h1 className="tit">
                        {this.state.tit_1}
                    </h1>
                    {
                        !this.state.status && (
                            <div className="formulario">
                                <Formik
                                    initialValues={{ email: '', password: '' }}
                                    validationSchema={(values) => this.validate(values)}
                                    onSubmit={(values) => this.onSubmit(values)}>
                                        {props => {
                                            const {
                                                values,
                                                touched,
                                                errors,
                                                dirty,
                                                isValid,
                                                isSubmitting,
                                                handleChange,
                                                handleBlur,
                                                handleSubmit,
                                                handleReset,
                                            } = props;
                                            return (
                                                <div className="formulario"> 
                                                    <form onSubmit={handleSubmit}>
                                                        <div>
                                                            <input
                                                                id="email"
                                                                placeholder="Ingrese email"
                                                                autoComplete="off"
                                                                value={values.email}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className={
                                                                    "form-control " +
                                                                    (errors.email && touched.email ? 'is-invalid' : '')
                                                                }
                                                            />
                                                            {errors.email && touched.email && (
                                                                <div className="input-feedback">{errors.email}</div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <input
                                                                id="password"
                                                                placeholder="Ingrese password"
                                                                autoComplete="off"
                                                                value={values.password}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className={
                                                                    "form-control " +
                                                                    (errors.password && touched.password ? 'is-invalid' : '')
                                                                }
                                                            />
                                                            {errors.password && touched.password && (
                                                                <div className="input-feedback">{errors.password}</div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <button
                                                                className="btn_"
                                                                type="submit"
                                                                disabled={!isValid}
                                                                variant="success" >
                                                                Enviar 
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            );
                                        }}
                                </Formik>
                            </div>
                        )
                    }
                </div>
			</div> 
		)
	}
}

export default Login;