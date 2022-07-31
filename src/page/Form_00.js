import React from 'react'

/*const Form_00 = () => (
    <h1> Formulario </h1>
)

function Form_00 (){
    return(
        <h1>Formulario</h1>
    )

}

export default Form_00
*/

//-------------------------------------------

export default class form_00 extends React.Component {
    /*constructor(props){
        super()
        this.state = {
            titulo: 'Boton: Enviar'
        }
    }*/

    state = {
        titulo: 'Boton: Enviar'
        
    }
    /*envioValor(){console.log(this)}*/

    envioValor = () => {console.log(this)}



    render(){
        return(
            <button className="btn btn-info" onClick={this.envioValor}>
                {this.state.titulo}
            </button>
        )
    }
}