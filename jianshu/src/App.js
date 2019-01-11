import React, {Component} from 'react';
import Header from './common/hearder';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/detail/:id" component={Detail}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/write" component={ Write }/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
