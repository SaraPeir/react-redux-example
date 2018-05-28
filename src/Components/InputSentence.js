import React, { Component } from 'react';
import {connect} from 'react-redux';
import Input from './Input';
import store from '../store';
import Sentence from './Sentence';

class InputSentence extends Component {
  constructor(props) {
    super(props);
  }


      render() {
        return (
          <div>
          <Input store={store}/>
          <Sentence store={store}/>
          </div>
          )
        }
      }



  export default InputSentence;
