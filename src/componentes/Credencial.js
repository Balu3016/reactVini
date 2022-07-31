import React from 'react'

import '../style/credencial.css'

export default class Credencial extends React.Component {
    render(){
        const{ matricula, nombre, gen, fec, grupo } = this.props
        return(

            <div className='dvcont01'>
                <div className='dvcont02'>
                    <div>
                    <img src='https://utvtblog.files.wordpress.com/2017/04/cropped-logo-utvt.png' className='imgtitulo' alt='UTVT' />
                    <table className='tb'>
                        <tbody>
                            <tr>
                                <td rowSpan="6" className="tdfoto">
                                    <img src='https://scontent.fmex1-4.fna.fbcdn.net/v/t1.6435-9/67918797_1129706737417155_8489539679916392448_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHsYQv5P1DWuUdpFRjHACFmpGRHp4JvdeukZEengm916-Bs_j0tMU-HpWyoawfmTaMb6aBcECVxuH-MWyUrVrcs&_nc_ohc=lAobg98yzu4AX9-bhso&_nc_ht=scontent.fmex1-4.fna&oh=00_AT-pF0Qi_kZzYaDkd_yf8F6T5C4G_yfhwmuEigzSVLyTkQ&oe=630DB787' className="imgfoto" alt="Foto Alumno" />
                                </td>
                                <td><b>Matricula:</b></td>
                                <td>{ matricula }</td>
                            </tr>
                            <tr>
                                <td>Nombre:</td>
                                <td>{ nombre }</td>
                            </tr>
                            <tr>
                                <td>Genero:</td>
                                <td>{ gen }</td>
                                
                            </tr>
                            <tr>
                                <td>Fecha N.</td>
                                <td>{ fec }</td>
                                
                            </tr>
                            <tr>
                                <td>Grupo:</td>
                                <td>{ grupo}</td>
                                
                            </tr>
                            <tr>
                                <td colSpan='2'>
                                    <i> Certifica que la persona mencionada anteriormente es  </i>
                                      <i> estudiante de esta institucion.</i>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan='2'><b><i>Inscrito en 30 Marzo del 2000</i></b></td>
                                <td colSpan='2' className='tbfondo'><b><i>UTVT</i></b></td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                </div>
            </div>
            
        )
       
    }
    
  
}