import React from 'react';
import AddDrinkForm from '../AddDrinkForm/AddDrinkForm.js';
import DrinksListContainer from '../../containers/DrinksListContainer/DrinksListContainer.js';
import FilterContainer from '../../containers/FilterContainer/FilterContainer.js';
import DrinkModalContainer from '../../containers/DrinkModalContainer';


import './App.css';

export default () => (
    <div className="app">
      <header className="app-header">Drink Rating Dashboard</header>
      <div className="app-forms">
        <AddDrinkForm/>
        <FilterContainer />
      </div>
      <main className="app-main">
        <DrinksListContainer/>
      </main>
      <DrinkModalContainer />
    </div> 
);