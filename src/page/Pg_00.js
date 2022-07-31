import React from 'react'

import { Link } from 'react-router-dom'
import img_a from  '../img/img_a.jpg'
import img_d from  '../img/img_d.jpg'
import arc_1 from '../archivos/arc_1.docx'

import Datos from '../componentes/Datos'
import Com from '../componentes/Com'

const infoCom = {
    nombre: "Gustavo ",
    app: "Garcia Figueroa ",
    n1: 110,
    n2: 155,
  }



  export default class Pg_00 extends React.Component{

    render(){
        return( <div class="container">
        <div class="row">
          <div class="col">
          <h1>Componentes</h1><br/>
          <img src={img_a} width="200" className="imgfoto" alt="Foto"/><br/>
          <a href={arc_1} target="_black">Archivo 1</a><br/>
          <h1><Link to='/pagina'>Pagina 2 </Link></h1>
            <h1><Link to='/pagina2'>credencial</Link></h1>
          </div>
          <div class="col">
              <Datos />
          </div>
          <div class="col">
            <h2>Componente 2</h2><br/>
            <Com nombre={infoCom.nombre} app={infoCom.app} n1={infoCom.n1} n2={infoCom.n2} img={img_d} /> 
          </div>
        </div>
            <br/><br/>
            <br/><br/>
            
            
            </div>

        )
    }
}