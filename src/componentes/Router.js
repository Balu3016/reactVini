import  React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Pg_00 from '../page/Pg_00'
import Pg_01 from '../page/Pg_01'
import Pg_02 from '../page/Pg_02'
import Evento_00 from '../page/Evento_00'
import Evento_01 from '../page/Evento_01'
import Form_00 from '../page/Form_00'
import Error from '../page/Error'

export default function Router(){
        return(
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Pg_00} />
                        <Route exact path='/pagina' component={Pg_01} />
                        <Route exact path='/pagina2' component={Pg_02} />
                        <Route exact path='/evento_00' component={Evento_00} />
                        <Route exact path='/evento_01' component={Evento_01} />
                        <Route exact path='/form_00' component={Form_00} />
                        <Route component={Error} /> 
                    </Switch>
                </BrowserRouter>
        )
}
