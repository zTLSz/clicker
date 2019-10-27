import React, { Component } from 'react';
import Counter from './counter'
import Buttons from './buttons'

export default class GameMain extends Component {
    render() {
      return (
        <div>
          <Counter />
          <Buttons />
        </div>
      );
    }
}


  