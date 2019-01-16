import React, {Component} from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import App from './App';
import Login from './pages/login';
import Admin from './Admin';
import Buttons from './pages/buttons';
import NoMatch from './pages/nomatch';
import Modals from './pages/modals'
class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}/>
                    <Route path='/admin' render={()=>
                        <Admin>
                            <Switch>
                                <Route path='/admin/ui/buttons' component={ Buttons }/>
                                <Route path='/admin/ui/modals' component={ Modals }/>
                                <Route  component={ NoMatch }/>

                            </Switch>
                        </Admin>
                    }/>
                    <Route path='/order/detail' component={Login}/>
                </App>
            </HashRouter>
        );
    }
}

export default IRouter;