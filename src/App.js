import React, { Component } from 'react';
import './App.css';
import Header from './jsxviews/UserView';
import TextFields from './jsxviews/FormView';
import {observer, inject,Provider} from 'mobx-react';

class App extends Component {
  render() {
    return (
     <div>
        <Header/>
        <TextFields/>
        </div>
    );
  }
}

export default App;
