import React, {Component} from 'react';
import Header from './common/hearder';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header/>
                    <Router>
                        <div>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/detail/" component={Detail}/>
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
