import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterDrinks } from './../../../actions/index';

import './FilterContainer.css';


class FilterContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        type: '',
        flavour: '',
        brand: '',
        email: ''
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
    this.props.onFilter(this.state);
  }

  render () {
    return (
      <div className="filter-form">
      <h2>Filter drinks by</h2>
      <form onSubmit={this.handleSubmit}>
        <div className="group-elements">
          <label>Type:<input type="text" name="type" onChange={this.handleInputChange}/></label>
        </div>
        <div className="group-elements">
          <label>Flavour:<input type="text" name="flavour" onChange={this.handleInputChange}/></label>
        </div>
        <div className="group-elements">
          <label>Brand:<input type="text" name="brand" onChange={this.handleInputChange}/></label>
        </div>
        <div className="group-elements">
          <label>Email:<input type="text" name="email" onChange={this.handleInputChange}/></label>
        </div>
        <button type="submit">Filter</button>
      </form>
    </div>
  );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onFilter: filters => {
      dispatch(filterDrinks(filters));
    }
  }
}

export default connect(
	null,
	mapDispatchToProps
)(FilterContainer);