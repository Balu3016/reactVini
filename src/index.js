// --java script
/*const objeto = document.createElement('h2')
  objeto.innerText = 'UTVT 2022'

  const objeto2 = document.createElement('b')
  objeto2.innerText = 'IDGS °9'

const informacion = document.getElementById('root')
informacion.appendChild(objeto)

const informacion2 = document.getElementById('info')
informacion2.appendChild(objeto2)

//Objeto -> Elemento => App



//-- REACT DOM

import React from 'react'
import ReactDOM from 'react-dom'


const nombre = 'UTVT'
const year = 2022

const escuela = {
  nombre: 'UTVT',
  year: 20222,

}


const objeto = <h2> {escuela.nombre}, {escuela.year}</h2>
const informacion = document.getElementById('root')

ReactDOM.render(objeto, informacion)

const objeto2 = <h2> IDGS °9</h2>
const informacion2 = document.getElementById('info')

ReactDOM.render(objeto2, informacion2)
//---------------------------------------
const num1 = 2;
const num2 = 6;

const armat ={
  n1: 2,
  n2: 5,
  n3: 7,
  n4: 9,
}


const objeto3 = <div> 
   <br/>
   <h2>OP-Matematicas</h2>
   {num1} + {num2} = {num1+num2}<br/>
   {num1} / {num2} = {num1/num2}
   <br/>
   {armat.n1} * {armat.n3} = {armat.n1*armat.n3}<br/>
   { (armat.n2 > armat.n1)? 'Mayor': 'Menor'}
  </div>
const informacion3 = document.getElementById('mate')

ReactDOM.render(objeto3, informacion3)

//----------------------
//-------------------------------------------------------------
function datos1(){
  return <div>
    <b>Funcion N°1</b>
    <br/>
  </div> 
}
function datos2 (numeros, txto){
  const rest = numeros.n2 * numeros.n4;
  return txto + " = " + numeros.n1 + " != "+ numeros.n2 + "//" + rest
}

function datos3(numero){
  if(numero> 5){
    return <h1>numero es mayor que 5</h1>
  }
  else{
    return <h1>numero es menor que 5</h1>

  }

}

const numero = 10;

let listaNumerica = [];

const listanum = () => {
  for(var x = 0; x<10; x++){
    listaNumerica.push(<li>{x}</li>);
  }
  return listaNumerica;
}

const txtv = "nUmErOs";


const objeto4 = <div>
  <h2>Funciones</h2><br/>
  {datos1()}
  {datos2(armat, txtv)}
  {datos3(numero)}
<ul>{listanum()}</ul>
</div>

const informacion4 = document.getElementById('funciones')

ReactDOM.render(objeto4, informacion4)


/*import React from 'react'
import ReactDOM from 'react-dom'

const dtimg ={
  sr: "https://i0.wp.com/imagenesparapeques.com/wp-content/uploads/2022/03/Flork-14.png?resize=498%2C322&ssl=1",
  al: "Foto fran"
}


const objeto = <div>
  <h2>Etiquetas html / Tags / Elementos</h2><br/>
  <br></br>
  <img src={dtimg} alt={dtimg.al}></img>
  <br/>
  <img src="" alt="Foto fran 2"/>
</div> 

const informacion = 
ReactDOM.render(objeto.informacion)
ReactDOM.render(objeto, document.getElementById('root'))

*/

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './style/main.css'
import Routs from './componentes/Router'




const info = <Routs /> 


ReactDOM.render(
  info,
  document.getElementById('root')
);

