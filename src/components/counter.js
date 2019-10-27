import React, { Component } from 'react';
import { connect } from 'react-redux';



class Counter extends Component {
    render() {
      const { counterBronze, counterSilver, counterGold } = this.props;
      return (
        <div className="counter__container">
          <div className="counter__item">
            <div className="counter__item-number">
              {counterBronze.toLocaleString('ru')}
            </div>
            <div className="counter__item-name">
              BronzeCoins
            </div>
          </div>
        </div>
      );
    }
}

/*
<div className="counter__item">
  <div className="counter__item-number">
    {counterSilver}
  </div>
  <div className="counter__item-name">
    SilverCoins
  </div>
  </div>
  <div className="counter__item">
  <div className="counter__item-number">
    {counterGold}
  </div>
  <div className="counter__item-name">
    GoldCoins
  </div>
</div>
*/

const mapStateToProps = store => { 
    return {
      counterBronze: store.total.counterBronze,
      counterSilver: store.total.counterSilver,
      counterGold: store.total.counterGold,
    }
  }
  

export default connect(mapStateToProps)(Counter)
  