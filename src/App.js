import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/firebaseui.css';
import Game from './containers/Game'
import { Provider } from 'react-redux';
import { store } from './store/configureStore';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Game />
        </div>
      </Provider>
    );
  }
}

export default App;
