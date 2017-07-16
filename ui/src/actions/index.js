import * as types from './action-types';
import { 
  loadDrinksRequest, 
  likeDrinkRequest, 
  rateDrinkRequest, 
  addDrinkRequest, 
  getFilteredDrinksRequest
} from '../api/drinks-api';


export const getDrinks = drink => {
  return dispatch => {
      return loadDrinksRequest()        
        .then(drinks => dispatch(getDrinksSuccess(drinks)));              
    }
  }

export const getDrinksSuccess = drinks => {
  return {
    type: types.GET_DRINKS_SUCCESS,
    data: drinks
  }
}

export const addDrink = drink => {
  return dispatch => {
      return addDrinkRequest(drink).then(() => {
        dispatch(addDrinkSuccess(drink));
      });
    }
  }

export const addDrinkSuccess = drink => {
	return {
		type: types.ADD_DRINK_SUCCESS,
		data: drink
	}
}

export const likeDrink = data => {
  return dispatch => {
    return likeDrinkRequest(data).then(drink => {
      dispatch(likeDrinkSuccess(drink));
      dispatch(closeLikeDrinkDialog(drink));
    });
  }
}

export const likeDrinkSuccess = data => {
  return {
    type: types.LIKE_DRINK_SUCCESS,
    data
  }
}


export const rateDrink = data => {
  return dispatch => {
    return rateDrinkRequest(data).then(drink => {
      dispatch(rateDrinkSuccess(drink));
      dispatch(closeRateDrinkDialog(drink));
    });
  }
}

export const rateDrinkSuccess = (data) => {
	return {
		type: types.RATE_DRINK_SUCCESS,
		data
	}
}

export const filterDrinks = filters => {
	return dispatch => {
    return getFilteredDrinksRequest(filters).then((drinks) => {
      dispatch(filterDrinksSuccess(drinks));
    });
  }
}

export const filterDrinksSuccess = drinks => {
  return {
    type: types.FILTER_DRINKS_SUCCESS,
    data: drinks
  }
}

export const openLikeDrinkDialog = drink => {
  return {
    type: types.OPEN_LIKE_DRINK_DIALOG,
    data: drink
  }
}

export const closeLikeDrinkDialog = drink => {
  return {
    type: types.CLOSE_LIKE_DRINK_DIALOG,
    data: drink
  }
}

export const openRateDrinkDialog = drink => {
  return {
    type: types.OPEN_RATE_DRINK_DIALOG,
    data: drink
  }
}

export const closeRateDrinkDialog = drink => {
  return {
    type: types.CLOSE_RATE_DRINK_DIALOG,
    data: drink
  }
}
