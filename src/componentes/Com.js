import React from 'react'

class Com extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nombre: 'UTVT',
            app: 'universidad',
            n1: 0,
            n2: 0,
            //imagen por defecto al inicio del comp
            img:'https://i.pinimg.com/564x/57/ca/40/57ca40875ebde50f306e318540ef0c16.jpg'
        }

    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                nombre: this.props.nombre,
                app: this.props.app,
                n1: this.props.n1,
                n2: this.props.n2,
                img: this.props.img

            })
        },5000)
    }
    render(){
        const {nombre, app, n1, n2, img} = this.state
        return <div>
            <h1>{app}, {nombre}</h1><br/>
            {n1} + {n2} = {n1 + n2}<br/>
            <img src={img} width="150" className="imgfoto" alt="Foto"/>
        </div>

    }
}

export default Com


/*export default function Com(props){
    return <div>
            <h1>{props.app}, {props.nombre}</h1><br/>
            {props.n1} + {props.n2} = {props.n1 + props.n2}
        </div>

}

//const Com = (props) => (
const Com = ({nombre, app, n1, n2}) => (
    <div>
            <h1>{app}, {nombre}</h1><br/>
            {n1} + {n2} = {n1 + n2}
    </div>

)

export default Com
*/