import React, { Component, useState } from 'react'
import { Formik, withFormik } from 'formik'
import * as Yup from 'yup'
import sha256 from 'sha256'
import { GET_USERS, LOGIN, ADD_USER } from '../../services/queries'
import { saveCookie, retrieveCookie, deleteCookie } from '../../services/cookies'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Spinner } from 'reactstrap';


//import { getAxios } from './../../services'

/*img*/
import img_1 from './../../assets/img/img_1.jpg'

/*css*/
import './Login.scss'

const SignupSchema = Yup.object().shape(
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


const CreateSchema = Yup.object().shape(
    {
        email:
            Yup
                .string()
                .required('Campo requerido'),
        password:
            Yup
                .string()
                .required('Campo requerido'),
        name:
            Yup
                .string()
                .required('Campo requerido'),
        username:
            Yup
                .string()
                .required('Campo requerido')
    })


function Create() {
    const [createUser] = useMutation(ADD_USER);
    return (
        <div className="formulario">
            <Formik
                initialValues={{ email: '', password: '', name: '', username: '' }}
                validationSchema={CreateSchema}
                onSubmit={  
                    async e => {
                        await createUser({ variables: { name: e.name, username: e.username, email: e.email, password: e.password } })
                        .then( response => {
                             
                        })
                      } 
                }>
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
                                            type="password"
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
                                        <input
                                            id="name"
                                            placeholder="Ingrese nombre"
                                            autoComplete="off"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                "form-control " +
                                                (errors.name && touched.name ? 'is-invalid' : '')
                                            }
                                        />
                                        {errors.name && touched.name && (
                                            <div className="input-feedback">{errors.name}</div>
                                        )}
                                    </div>
                                    <div>
                                        <input
                                            id="username"
                                            placeholder="Ingrese username"
                                            autoComplete="off"
                                            value={values.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                "form-control " +
                                                (errors.username && touched.username ? 'is-invalid' : '')
                                            }
                                        />
                                        {errors.username && touched.username && (
                                            <div className="input-feedback">{errors.username}</div>
                                        )}
                                    </div>
                                    <div>
                                        <button
                                            className="btn_"
                                            type="submit"
                                            disabled={!isValid}
                                            variant="success" >
                                            Crear 
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

function Form(props) {
    const [loginUser] = useMutation(LOGIN);
    var props_ = props
    return (
        <div className="formulario">
            <Formik
                initialValues={{ email: 'javier', password: 'javier' }}
                validationSchema={SignupSchema}
                onSubmit={ 
                    
                    async e => {
                        await loginUser({ variables: { email: e.email, password: sha256(e.password) } })
                        .then( response => {
                            saveCookie('token', response.data.loginUser.token)
                            props_.showTableUser()   
                        })
                        .catch(errors => {
                            alert("El usuario o la contraseña son incorrectos")
                        })
                      }

                }>
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
                                            type="password"
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

function Table(props) {

    const userInfo = useQuery(GET_USERS)
    if (userInfo.loading) return <Spinner color="dark" />;
    if (userInfo.error) return <React.Fragment>Error :(</React.Fragment>

    return (
        <div className="formulario">
            <table className="table table-striped">
                <thead className="thead_light">
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Url</th>
                    </tr>
                </thead>
                <tbody>
                {
                    userInfo.data.getUser.map( item =>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                    </tr> 
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

class Login extends Component{

      
	constructor(props) {
		super(props);
		this.state = {
            tit_1: 'Ingrese sus datos',
            createUser: false, 
            login: true,
            table: false
        }
        this.showTableUser = this.showTableUser.bind(this)
        this.createUser = this.createUser.bind(this)
    }

    createUser(){
        this.setState({
            tit_1: "Crear usuario",
            createUser: true,
            login: false
        })
    }

    showTableUser(){
        this.setState({
            tit_1: "Tabla de usuario",
            createUser: false,
            login: false,
            table: true
        })
    }


	render(){
		return (
			<div className="login">
                <div className="get_login">
                    <h1 className="tit">
                        {this.state.tit_1}
                    </h1>
                    {
                        this.state.login && (
                            <div>
                                <Form this_={this} showTableUser={this.showTableUser} />
                                <div className="create_user" onClick={this.createUser}>
                                    Crear Usuario
                                </div>
                            </div>
                        )
                    }
                    {
                         this.state.createUser && (
                            <Create/>
                         )
                    }
                    {
                         this.state.table && (
                            <Table/>
                         )
                    }
                </div>
			</div> 
		)
	}
}

export default Login;