import React, { Component } from 'react';
import Header from './common/hearder/index';
import { Provider } from 'react-redux';

import store from './store/index';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Header/>
        </Provider>
    );
  }
}

export default App;
