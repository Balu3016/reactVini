import React from 'react'

export default class C3 extends React.Component{

            constructor(props){
                super(props)
                this.state = {
                    info: [{
                        matricula: 0,
                        nombre: "---------",
                        app: "- - - - -",
                        fn: "--/--/----",
                        carrera: "*****",
                        grupo: "********",
                        uni: "______",
                        img: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2021/05/loki-tom-hiddleston-2345851.jpg?itok=o8CFozmK'

                        }
                    ]
                }
            }

        render(){
            return(
            <div className="container">
                <h1>State - Array - Component</h1>
                
                <br/><br/>
                <div className="row">
                    {this.props.info.map((tarjeta) =>{
                        return(
                            <div className="col">
                            <div className="tarjeta">
                            <img src={tarjeta.img} className="imgfoto" alt="Foto Alumno" />
                            <div>
                                    <h5>{tarjeta.app}, {tarjeta.nombre}</h5>
                                    <p>
                                        Matricula: {tarjeta.matricula} <br/>
                                        Fecha N: {tarjeta.fn} <br/>
                                        Grupo: {tarjeta.grupo} <br/>
                                        Carrera: {tarjeta.carrera} <br/>
                                        Universidad: {tarjeta.uni} <br/>
                                    </p>
                                    <a href={tarjeta.img} className="btn btn-primary" target="_blanck">Descarga</a>
                            </div>
                            </div>
                        </div>

                        )
                    })}

                
                </div>

            </div> 
            );
        }

}