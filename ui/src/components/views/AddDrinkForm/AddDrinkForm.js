import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addDrink } from '../../../actions/index'

import './AddDrinkForm.css';

class AddDrinkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      flavour: '',
      brand: ''
    };

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
    this.props.dispatch(addDrink(this.state))
  }

  render() {
    return (
    	<div className="add-drink-form">
        <h2>Add drink</h2>
	      <form onSubmit={this.handleSubmit}>
		      <div className="group-elements">
		      	<label>Type:<input type="text" name="type" required onChange={this.handleInputChange}/></label>
		      </div>
		      <div className="group-elements">
		      	<label>Flavour:<input type="text" name="flavour" required onChange={this.handleInputChange}/></label>
		      </div>
		      <div className="group-elements">
		      	<label>Brand:<input type="text" name="brand" required onChange={this.handleInputChange}/></label>
		      </div>
	        <button type="submit">Add</button>
	      </form>
      </div>
    );
  }
}
AddDrinkForm = connect()(AddDrinkForm)

export default AddDrinkForm