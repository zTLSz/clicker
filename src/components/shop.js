import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { buyBronzeWorkbench } from '../actions/buyBronzeWorkbench'
import { buyBronzeVideoCard } from '../actions/buyBronzeVideocard'
import Button from '@material-ui/core/Button';
import Counter from './counter'
import Buttons from './buttons'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



class Shop extends Component {


  constructor(props) {
    super(props);
    this.buyBronzeWorkbench = this.buyBronzeWorkbench.bind(this);
    this.buyBronzeVideocard = this.buyBronzeVideocard.bind(this);
  }

  buyBronzeWorkbench() {
    const { bronzewb } = this.props;
    this.props.buyBronzeWorkbench(bronzewb.price, bronzewb.power)
  }

  buyBronzeVideocard() {
    const { bronzevideo } = this.props;
    this.props.buyBronzeVideoCard(bronzevideo.price, bronzevideo.power)
  }

    render() {
      const { bronzewb, bronzevideo, total } = this.props;
      return (
        <div>
            <Counter />
            <Buttons />

            <Grid container spacing={8}>
              <Grid item xs>
                <Button variant="contained" color="primary" size="large" onClick={this.buyBronzeWorkbench}>Купить бронзовый верстак за  
                {bronzewb.price} коинов</Button>
                <Typography variant="caption" display="block" gutterBottom>
                  У вас {bronzewb.count} бронзовых верстаков, которые производят {bronzewb.power * 4} коинов в секунду
                </Typography>
              </Grid>
              <Grid item xs>
                <Button variant="contained" color="primary" size="large"
                onClick={this.buyBronzeVideocard}>Купить видеокарту за {bronzevideo.price} коинов</Button>
                <Typography variant="caption" display="block" gutterBottom>
                  У вас {bronzevideo.count} бронзовых верстаков, которые производят {bronzevideo.power * 4} коинов в секунду  
                </Typography>            
              </Grid>

            </Grid>
        </div>
      );
    }
}


const mapStateToProps = store => { 
  return {
    total: store.total,
    bronzewb: store.bronzewb,
    bronzevideo: store.bronzevideo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyBronzeWorkbench: (cost, power) => dispatch(buyBronzeWorkbench(cost, power)),
    buyBronzeVideoCard: (cost, power) => dispatch(buyBronzeVideoCard(cost, power)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)