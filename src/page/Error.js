import React from 'react'

import { Link } from 'react-router-dom'
export default function Error(){
    return(
        <div>
            <h1>Error 404 !!!</h1><br/>          
            <br/>
            <Link to='/'>Inicio </Link>
        </div> 
    )
}