import React, { Component } from 'react'
import { Formik, withFormik } from 'formik'
import { X, Circle } from 'react-bootstrap-icons';
import * as Yup from 'yup'
import { city } from '../../constants'
//import { getAxios } from './../../services'

/*img*/
import img_1 from './../../assets/img/img_1.jpg'

/*css*/
import './Triqui.scss'

class Datos extends Component{

      
	constructor(props) {
		super(props);
		this.state = {
            tit_1: 'Ingrese los datos de los jugadores',
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
        this.init()
    }

    init(){
        var matrix = []
        for(var i = 0; i < 3; i++){
            matrix[i] = []
            for(var j = 0; j < 3; j++){
                matrix[i][j] = { value: false}
            }
        }
        this.setState({
            matrix: matrix,
            finished: false,
            tit_2: "Tu turno "
        })
    }

    onSubmit(values) {
        this.setState({
            player_one_name: values.player_one,
            player_two_name: values.player_two,
            status: true,
            tit_1:  "Comencemos a jugar"
        })
    }

    valid(matrix){
        var count_player_one = 0, 
            count_player_two = 0,
            count_player_one_h = 0, 
            count_player_two_h = 0, 
            count_player_one_dig_1 = 0, 
            count_player_two_dig_1 = 0
        for(var i = 0; i < 3; i++){
            count_player_one = 0
            count_player_one_h = 0
            count_player_two = 0
            count_player_two_h = 0
            for(var j = 0; j < 3; j++){    
                if(matrix[i][j].value && matrix[i][j].player_one){
                    count_player_one++
                    if(count_player_one === 3){
                        this.success()
                    }
                }
                if(matrix[j][i].value && matrix[j][i].player_one){
                    count_player_one_h++
                    if(count_player_one_h === 3){
                        this.success()
                    }
                }
                if(matrix[j][i].value && matrix[j][i].player_two){
                    count_player_two++
                    if(count_player_two === 3){
                        this.success()
                    } 
                }
                if(matrix[i][j].value && matrix[i][j].player_two){
                    count_player_two_h++
                    if(count_player_two_h === 3){
                        this.success()
                    }  
                }
                if(i === j && matrix[j][i].value){
                    if(matrix[i][j].player_one){
                        count_player_one_dig_1++
                        if(count_player_one_dig_1 === 3){
                            this.success()
                        }
                    }
                    if(matrix[i][j].player_two){
                        count_player_two_dig_1++
                        if(count_player_two_dig_1 === 3){
                            this.success()
                        }
                    }
                }
            }
        }
        if(matrix[0][2].value && matrix[2][0].value && matrix[1][1].value){
            if(matrix[0][2].player_two && matrix[2][0].player_two && matrix[1][1].player_two){
                this.success()
            }
            if(matrix[0][2].player_one && matrix[2][0].player_one && matrix[1][1].player_one){
                this.success()
            }
        }
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
                player_one:
                    Yup
                        .string()
                        .required('Campo requerido'),
                player_two:
                    Yup
                        .string()
                        .required('Campo requerido'),
            })
    }
    reboot(e){
        window.location.reload();
        // const {stateService} = this.props.transition.router;
        // stateService.go('layout');
    }

	render(){
        this.state.city = city
		return (
			<div className="datos">
                <div>
                    <h1>
                        {this.state.tit_1}
                    </h1>
                    {
                        !this.state.status && (
                            <div className="formulario">
                                <Formik
                                    initialValues={{ player_one: '', player_two: '' }}
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
                                                                id="player_one"
                                                                placeholder="Nombre del jugador 1"
                                                                autoComplete="off"
                                                                value={values.player_one}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className={
                                                                    "form-control " +
                                                                    (errors.player_one && touched.player_one ? 'is-invalid' : '')
                                                                }
                                                            />
                                                            {errors.player_one && touched.player_one && (
                                                                <div className="input-feedback">{errors.player_one}</div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <input
                                                                id="player_two"
                                                                placeholder="Nombre del jugador 2"
                                                                autoComplete="off"
                                                                value={values.player_two}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className={
                                                                    "form-control " +
                                                                    (errors.player_two && touched.player_two ? 'is-invalid' : '')
                                                                }
                                                            />
                                                            {errors.player_two && touched.player_two && (
                                                                <div className="input-feedback">{errors.player_two}</div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <button
                                                                className="btn_"
                                                                type="submit"
                                                                disabled={!isValid}
                                                                variant="success" >
                                                                Juguemos 
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
                    {
                        this.state.status && (
                            <div className="name">
                                {
                                    this.state.player_one && (
                                        <div>
                                            {this.state.tit_2} {this.state.num_turn === 9 ? '' : this.state.player_one_name}
                                        </div>
                                    )
                                }
                                {
                                    this.state.player_two && (
                                        <div>
                                            {this.state.tit_2} {this.state.num_turn === 9 ? '' : this.state.player_two_name}
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                    <div className="reboot">
                        {
                            this.state.finished && (
                                <div>
                                    <button type="button" onClick={() => this.reboot()} className="btn_2">reiniciar</button>
                                    <button type="button" onClick={() => this.init()} className="btn_2 btn_second">Juga de nuevo</button>
                                </div>
                            )
                        }
                    </div>

                </div>
                <div>
                    <div className="triqui">
                        <div className="horizontal">
                            <hr/>
                            <hr/>
                        </div>
                        <div className="vertical">
                            <hr/>
                            <hr/>
                        </div>
                        {
                            this.state.matrix.map( (item_i, index_i) => 
                                <div className="container" key={index_i}>
                                    {
                                        item_i.map( (item_j, index_j) =>
                                            <div className="celdas" key={index_j} onClick={() => this.playerTurn(item_j, index_i, index_j)}>
                                                {
                                                    item_j.value && item_j.player_one && (
                                                        <Circle className="img_test" size="38"/>
                                                    )
                                                }
                                                {
                                                    item_j.value && item_j.player_two && (
                                                        <X className="img_test" size="45"/>
                                                    )
                                                }
                                            </div>
                                        )   
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
			</div> 
		)
	}
}

export default Datos;