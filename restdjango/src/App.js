import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.min.css';
import Header from './common/header';
import Footer from './common/footer';
import ArticlePage from './pages/article';
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
    render() {
        return (
            <Provider store={ store }>
            <div>
                <Header/>
                <ArticlePage/>
                <Footer/>
            </div>
            </Provider>
        );
    }
}

export default App;
