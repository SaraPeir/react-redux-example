import React, { Component } from 'react';
import store from '../store';

class Sentence extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  textParagraph(){
    if (this.store.getState().inputValue) {
        return this.store.getState().inputValue
      } else {
        return 'Hola, escribe algo'
      }
    }

  render() {
    return (
      <div>
        <p>{this.textParagraph()}</p>
      </div>
      )
    }
  }

export default Sentence;
