import * as types from '../actions/action-types';


export default (state = {}, action) => {
	switch (action.type) {
		case types.OPEN_LIKE_DRINK_DIALOG:
      		return {
      			isOpen: true,
      			isLike: true,
      			drink: action.data
      		};
		case types.CLOSE_LIKE_DRINK_DIALOG: 
			return {
      			isOpen: false,
      			isLike: true,
      			drink: action.data
      		};
            case types.OPEN_RATE_DRINK_DIALOG:
                  return {
                        isOpen: true,
                        isLike: false,
                        drink: action.data,
                  };
            case types.CLOSE_RATE_DRINK_DIALOG: 
                  return {
                        isOpen: false,
                        isLike: false,
                        drink: action.data
                  };
		default:
			return state;
	}
}