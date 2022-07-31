import React from 'react';
import { Link } from 'react-router-dom'

import C3 from '../componentes/C3'

import '../style/tarjeta.css'

import balu from '../img/balu.jpg'

const info = [{
    matricula: 221910413,
    nombre: "Gustavo",
    app: "Garcia Figueroa",
    fn: "30/03/2000",
    carrera: "IDGS",
    grupo:"IDGS-91",
    uni:"UTVT",
    img: balu

},{
    matricula: 221910413,
    nombre: "Gustavo",
    app: "Garcia Figueroa",
    fn: "30/03/2000",
    carrera: "IDGS",
    grupo:"IDGS-91",
    uni:"UTVT",
    img: balu

},{
    matricula: 221910413,
    nombre: "Gustavo",
    app: "Garcia Figueroa",
    fn: "30/03/2000",
    carrera: "IDGS",
    grupo:"IDGS-91",
    uni:"UTVT",
    img: balu

}
]

export default class Pg_01 extends React.Component {

        render(){
            return(
                <di>
                    <C3  info= {info}/>
                    <h2><Link to='/'>Inicio </Link></h2>
                </di>
            )
        }
   

}