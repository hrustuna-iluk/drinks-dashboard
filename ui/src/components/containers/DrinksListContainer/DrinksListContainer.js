import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrinkItem from '../../views/DrinkItem/DrinkItem';
import { getDrinks, openLikeDrinkDialog, openRateDrinkDialog } from './../../../actions/index';

import './DrinksListContainer.css';


class DrinksListContainer extends Component {
	componentDidMount() {
		this.props.getDrinks();
	}

	render() {
		return (
			<div className="drink-items-container">
				{this.props.drinks.map((drink, index) => <DrinkItem key={index} 
					drink={drink} onLike={this.props.openLikeDrinkDialog} onRate={this.props.openRateDrinkDialog} /> ) }
			</div>
		);
	}
}

const mapStateToProps = function(store) {
  return {
    drinks: store.drinks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openLikeDrinkDialog: drink => {
      dispatch(openLikeDrinkDialog(drink));
    },
    openRateDrinkDialog: drink => {
      dispatch(openRateDrinkDialog(drink));
    },
    getDrinks: () => {
    	dispatch(getDrinks());
    } 
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DrinksListContainer);