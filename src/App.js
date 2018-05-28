import React, { Component } from 'react';
import './App.css';
import Input from './Components/Input';
import store from './store';
import InputSentence from './Components/InputSentence';
import OtherComponent from './Components/otherComponent';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {

  constructor(props) {
  super(props);
  }

  render() {
    return (
      <div className="App">
        <Link to={`/`} style={{textDecoration: 'none', color: 'white', textAlign: 'center'}}>
          <button>Main component</button>
        </Link>
        <Link to={`/component`} style={{textDecoration: 'none', color: 'white', textAlign: 'center'}}>
          <button>Other component</button>
        </Link>
        <Switch>
          <Route exact path='/' component={ InputSentence } />
          <Route path='/component' component={ OtherComponent } />
        </Switch>
      </div>
    );
  }
}

export default App;
