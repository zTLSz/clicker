import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import { autoclickBronze } from '../actions/autoclickbronze'


class Game extends Component {

  constructor(props) {
    super(props);
    console.log(this.props)
 }

  componentDidMount() {
    setInterval(() => this.props.autoclickBronze(), 250);
  }

    render() {
      return (
        <div className="App">
          <Header />
        </div>
      );
    }
}

const mapStateToProps = store => { 
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    autoclickBronze: () => dispatch(autoclickBronze())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
  


