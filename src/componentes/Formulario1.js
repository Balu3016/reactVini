import React from 'react'

export default class Formulario1 extends React.Component {

            state = { }

            envioForm = (event) =>{
                event.preventDefault()
                console.log(this.state)
            }

            render(){
                    const { camForm, info } = this.props
                    return(
                            <div className="container" style ={{width: "30%" }}>
                                <br/>
                                <h1>Formulario Alumno</h1><br/>
                                <form onSubmit={this.envioForm} >
                                    <div className="form-group">
                                        <label>Matricula:</label>
                                        <input type="text" className="form-control" name="matricula"
                                        onChange={camForm} 
                                        value={info.matricula} />
                                    </div>
                                    <div className="form-group">
                                        <label>Nombre:</label>
                                        <input type="text" className="form-control" name="nombre"
                                        onChange={camForm} 
                                        value={info.nombre} />
                                    </div>
                                    <div className="form-group">
                                        <label>Fecha de Nacimiento:</label>
                                        <input type="date" className="form-control" name="fec" 
                                        onChange={camForm} 
                                        value={info.fec} />
                                    </div>
                                    <div className="form-group">
                                        <label>Genero:</label>
                                        <div className="from-check">
                                        <input type="radio" className="form-check.input" name="gen" value='Femenino'
                                        onChange={camForm}  />
                                        <label className="from-check-label">Femenino</label>
                                        </div>
                                        <div className="from-check">
                                        <input type="radio" className="form-check.input" name="gen" value='Masculino'
                                        onChange={camForm} />
                                        <label className="from-check-label">Masculino</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Grupo:</label>
                                        <select className="form-control" name="grupo" onChange={camForm}  >
                                            <option value="IDGS-91">IDGS-91</option>
                                            <option value="IDGS-92">IDGS-92</option>
                                        </select>
                                    </div>
            
                                    <div className="form-group">
                                        <input type="submit" value="Enviar" className="btn btn-info" />
                                    </div>
                                </form>
                            </div>

                    )

                }
            }