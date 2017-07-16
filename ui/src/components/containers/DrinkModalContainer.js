import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import TiStarFullOutline from 'react-icons/lib/ti/star-full-outline';
import { closeLikeDrinkDialog, rateDrink, likeDrink } from './../../actions/index';

class DrinkModalContainer extends Component {

	constructor(props) {
		super(props);

		this.handleInputChange = this.handleInputChange.bind(this);
      	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
	    const target = event.target;

	    this.setState({
	      [target.name]: target.value
	    });
  	}

	handleSubmit(event) {
		event.preventDefault(); 

		if (this.props.isLike) {
			this.props.onLikeConfirm({ 
				drink: this.props.drink, 
				email: this.state.email 
			});	
		} else {
			this.props.onRateConfirm({
				drink: this.props.drink,
				email: this.state.email, 
				rate: this.state.rate			
			});
		}
	}

	render() {
		return (
		   <Modal
				isOpen={this.props.isOpen}
				onRequestClose={this.props.onRequestClose}
				contentLabel="Modal"
				className={{
					base: 'modal',
					afterOpen: 'modal_after-open',
					beforeClose: 'modal_before-close'
				}}
				overlayClassName={{
					base: 'overlayModal',
					afterOpen: 'overlayModal-open',
					beforeClose: 'overlayModal-close'
				}}
			>
				<form onSubmit={ this.handleSubmit }>
					<label>Email: <input type="email" name="email" required onChange={this.handleInputChange}/></label>
					{ !this.props.isLike 
						? (
							<div>	
								<div className="rate-list">
									<div>
										<input type="radio" name="rate" required value="1" onChange={this.handleInputChange}/>
										<label htmlFor="oneStar">
											<TiStarFullOutline />
										</label>
									</div>
									<div>
										<input type="radio" name="rate" required value="2" onChange={this.handleInputChange}/>
										<label htmlFor="twoStars">
											<TiStarFullOutline />
											<TiStarFullOutline />
										</label>
									</div>
									<div>
										<input type="radio" name="rate" required value="3" onChange={this.handleInputChange}/>
										<label htmlFor="threeStars">
											<TiStarFullOutline />
											<TiStarFullOutline />
											<TiStarFullOutline />
										</label>
									</div>
									<div>
										<input type="radio" name="rate" required value="4" onChange={this.handleInputChange}/>
										<label htmlFor="fourStars">
											<TiStarFullOutline />
											<TiStarFullOutline />
											<TiStarFullOutline />
											<TiStarFullOutline />
										</label>
									</div>
									<div>
										<input type="radio" name="rate" required value="5" onChange={this.handleInputChange}/>	
										<label htmlFor="fiveStars">
											<TiStarFullOutline />
											<TiStarFullOutline />
											<TiStarFullOutline />
											<TiStarFullOutline />
											<TiStarFullOutline />
										</label>
									</div>
								</div>
							</div>
						 ) : ''
					}
					<div className="form-buttons">
						<button type="button" onClick={ this.props.onClose }>Close</button>
						<button>Confirm</button>
					</div>
				</form>
			</Modal>
		);
	}
}


const mapStateToProps = function(store) {
  return {
    isOpen: store.drinkModal.isOpen,
    drink: store.drinkModal.drink,
    isLike: store.drinkModal.isLike
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClose: (drink) => {
      dispatch(closeLikeDrinkDialog(drink));
    },
    onRequestClose: (drink) => {
      dispatch(closeLikeDrinkDialog(drink));
    },
    onLikeConfirm: (data) => {
    	dispatch(likeDrink(data));
    },
    onRateConfirm: (data) => {
    	dispatch(rateDrink(data));
    }
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DrinkModalContainer);