import React, {Component,Fragment} from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import App from './App';
import Login from './pages/login';
import Admin from './Admin';
import Button from './pages/buttons';
import NoMatch from './pages/nomatch';

class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}/>
                    <Route path='/admin' render={()=>
                        <Admin>
                            <Route path='/admin/ui/buttons' component={ Button }/>
                            <Route  component={ NoMatch }/>
                        </Admin>
                    }/>
                    <Route path='/order/detail' component={Login}/>
                </App>
            </HashRouter>
        );
    }
}

export default IRouter;