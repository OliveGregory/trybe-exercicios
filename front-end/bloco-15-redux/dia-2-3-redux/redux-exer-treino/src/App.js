import React, { Component } from 'react';
import './App.css';
import Player from './components/Player';
import Sidebar from './components/sidebar';
import { categories } from './components/data';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [...categories]
    }
  }
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Sidebar categories={this.state.categories}/>
          <Player />
          </Provider>
      </div>
    );
  }
}


export default App;