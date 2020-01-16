import React, { Component } from 'react'
import { Formik, withFormik } from 'formik'
import * as Yup from 'yup'
import { city } from './../../constants'
//import { getAxios } from './../../services'

/*img*/
import img_1 from './../../assets/img/img_1.jpg'

/*css*/
import './Datos.scss'

class Datos extends Component{

	constructor(props) {
		super(props);
		this.state = {
            city: {} 
        }
        this.validate = this.validate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
	}

    onSubmit(values) {
        console.log("values...", values)
    }
    
    validate(values) {
        return Yup.object().shape(
            {
                email:
                    Yup
                        .string()
                        .email('Correo invalido')
                        .required('Campo requerido'),
                movil: 
                    Yup 
                        .number('El campo debe ser númerico')
                        .required('Campo requerido'),
                city: 
                    Yup
                        .string()
                        .required('Campo requerido'),
            })
    }

	render(){
        this.state.city = city
		return (
			<div className="datos">
                <div>
                    <h1>
                        LOREM IPSUM DOLOR SIT 
                    </h1>
                    <div className="formulario">
                    <Formik
                        initialValues={{ email: '', movil: '', city: '' }}
                        validationSchema={(values) => this.validate(values)}
                        onSubmit={(values) => this.onSubmit(values)}
                    >
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
                                            placeholder="Email"
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
                                            id="movil"
                                            placeholder="Celular"
                                            autoComplete="off"
                                            value={values.movil}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                "form-control " +
                                                (errors.movil && touched.movil ? 'is-invalid' : '')
                                            }
                                        />
                                        {errors.movil && touched.movil && (
                                            <div className="input-feedback">{errors.movil}</div>
                                        )}
                                    </div>
                                    <div>
                                        <select
                                            id="city"
                                            placeholder="Ciudad"
                                            value={values.city}
                                            onChange={handleChange}
                                            className={
                                                "form-control " +
                                                (errors.city && touched.city ? 'is-invalid' : '')
                                            }
                                            onBlur={handleBlur}>
                                            <option></option>
                                            {
                                                this.state.city.map(
                                                    (item, index) =>
                                                        <option key={index} value={item.value}>{item.text}</option>
                                                )
                                            }
                                        </select>
                                        {errors.city && touched.city && (
                                            <div className="input-feedback">{errors.city}</div>
                                        )}
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={!isValid}
                                            variant="success" >
                                            Aceptar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        );
                    }}

                </Formik>
                    </div>

                </div>
                <div>
                    <img src={img_1} alt="" />
                </div>
			</div> 
		)
	}
}

export default Datos;