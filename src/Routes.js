import React from 'react';
import { Router,Stack, Scene } from 'react-native-router-flux';

import Login from './pages/login'
import Signup from './pages/Signup'

export default class Routes extends React.Component{
    render (){
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" initial={true}/>
                    <Scene key="Signup" component={Signup} title="Signup"/>
                </Stack>
            </Router>
        )
    }
}