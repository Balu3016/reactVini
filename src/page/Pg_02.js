import React from "react"

import { Link } from 'react-router-dom'
import Formulario1 from '../componentes/Formulario1'
import Credencial from '../componentes/Credencial'

export default class Pg_02 extends React.Component {
    state = {
        info:{
            matricula: 221910413,
            nombre: 'Gustavo Garcia Figueroa',
            fec: '30/03/2000',
            gen: 'Masculino',
            grupo: 'IDGS-91'
        }
            
    }

    envioValor = (event) => {
        this.setState({
            info:{
                ...this.state.info,
                [event.target.name]: event.target.value
            }
        })
    }

    render (){
        return(
            <div className="containers">
                
                <div className='row'>
                    <div className='col-sm'>
                       <Credencial { ...this.state.info }/> 
                    </div>
                    <div className='col-sm'>
                      <center><h1>Informacion  Alumno</h1></center>
    <center><h2><Link to='/'>Inicio </Link></h2></center>
                        <br/>
                        <Formulario1
                            camForm = {this.envioValor}
                            info = {this.state.info}
                        />

                    </div>
                </div>
               
            </div>
        )
    }
}