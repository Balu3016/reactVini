import React from 'react'

export default class Evento_00 extends React.Component {
    /*constructor(props){
        super(props);
        this.state = { 
            nombre: '',
            fec: '',
            gen: '',
            grupo: '',
            may: false
            };
        this.envioValor = this.envioValor.bind(this);
        this.envioValor2 = this.envioValor2.bind(this);
    }
    */
    state = { 
        nombre: '',
        fec: '',
        gen: '',
        grupo: '',
        may: false
        };

    envioValor = (event) => {
        let name = event.target.name;
        let variable = event.target.value;
        let checked = event.target.checked;
        let type = event.target.type;
        this.setState({[name]:type!="checkbox"? variable:checked});
    }

    envioValor2 = ({name, value, checked, type}) => {
        this.setState({[name]:type!="checkbox"? checked:value});

    }

    envioForm = (event) =>{
        event.preventDefault()
        console.log(this.state)
    }

    render(){
            return(
                    <div className="container" style ={{width: "30%" }}>
                        <br/>
                        <h1>Formulario N°2</h1><br/>
                        <form onSubmit={this.envioForm} >
                            <div className="form-group">
                                <label>Nombre:</label>
                                <input type="text" className="form-control" name="nombre" value={this.state.nombre}
                                onChange={event=>this.envioValor2(event.target)} />
                            </div>
                            <div className="form-group">
                                <label>Fecha de Nacimiento:</label>
                                <input type="date" className="form-control" name="fec" 
                                onChange={this.envioValor} />
                            </div>
                            <div className="form-group">
                                <label>Genero:</label>
                                <div className="from-check">
                                <input type="radio" className="form-check.input" name="gen" value='F'
                                onChange={this.envioValor} />
                                <label className="from-check-label">Femenino</label>
                                </div>
                                <div className="from-check">
                                <input type="radio" className="form-check.input" name="gen" value='M'
                                onChange={this.envioValor} />
                                <label className="from-check-label">Masculino</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Grupo:</label>
                                <select className="form-control" name="grupo" onChange={this.envioValor} >
                                    <option value="IDGS-91">IDGS-91</option>
                                    <option value="IDGS-92">IDGS-92</option>
                                </select>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name="may" 
                                onChange={this.envioValor} />
                                <label className="from-check-label">Es Mayor de edad</label>
                            </div>
                            

                            <div className="form-group">
                                <input type="submit" value="Enviar" className="btn btn-info" />
                            </div>
                        </form>
                    </div>

            )

    }
}