export const loadDrinksRequest = () => {
	return fetch('http://localhost:8000/api/drinks/')
		.then(resp => resp.json());
}

export const addDrinkRequest = (drink) => {
	return fetch(
		'http://localhost:8000/api/drinks/', 
		{ 
			headers: {
      			'Accept': 'application/json',
      			'Content-Type': 'application/json'
    		},
			method: 'POST',
			body: JSON.stringify(drink)
		}
	)
	.then(resp => resp.json());
}

export const likeDrinkRequest = (data) => {
	return fetch(
		`http://localhost:8000/api/drinks/${data.drink.id}/like_drink/`, 
		{ 
			headers: {
      			'Accept': 'application/json',
      			'Content-Type': 'application/json'
    		},
			method: 'POST',
			body: JSON.stringify({ email: data.email })
		}
	)
	.then(resp => resp.json());
}

export const rateDrinkRequest = (data) => {
	return fetch(
		`http://localhost:8000/api/drinks/${data.drink.id}/rate_drink/`, 
		{ 
			headers: {
      			'Accept': 'application/json',
      			'Content-Type': 'application/json'
    		},
			method: 'POST',
			body: JSON.stringify({ email: data.email, rate: data.rate })
		}
	)
	.then(resp => resp.json());
}

export const getFilteredDrinksRequest = (filters) => {
	const url = new URL('http://localhost:8000/api/drinks/');

	Object.keys(filters).forEach(key => url.searchParams.append(key, filters[key]));

	return fetch(url).then(resp => resp.json());
}