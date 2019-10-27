import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { count } from '../actions/testAction';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';





class Buttons extends Component {
    render() {
      return (
        <div>
          <Button  variant="contained" color="secondary" className="click__large" 
            onClick={() => this.props.countAction()}>Добыть</Button>
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
    countAction: () => dispatch(count())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
