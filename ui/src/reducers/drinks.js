import * as types from '../actions/action-types';

export default (state = [], action) => {
	switch (action.type) {
		case types.GET_DRINKS_SUCCESS:
            case types.FILTER_DRINKS_SUCCESS:
      		return action.data;
		case types.ADD_DRINK_SUCCESS: 
			return  state.concat(action.data);
		case types.LIKE_DRINK_SUCCESS:
      		return state.map(drink => {
      			if (drink.id === action.data.id) {
                              return Object.assign({}, action.data);
                        }
                        return drink;
                  });
  		case types.RATE_DRINK_SUCCESS:
      		return state.map(drink => {
      			if (drink.id === action.data.id) {
      				return Object.assign({}, action.data);
      			}
      			return drink;
      		});
		default:
			return state;
	}
}