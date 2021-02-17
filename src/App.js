import './App.css';
import React, {useCallback, useState, useMemo} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Toolbar from '../src/Components/Toolbar/Toolbar';
import Footer from '../src/Components/Footer/Footer';
import Category from './Containers/Category/Category';
import NavigationContext from './Context/NavigationContext';

function App() {

   const [state, updateState] = useState({
     searchOptions: []
   });

   const searchChangeHandler = useCallback((event) => {
     const updatedSearchOptions = [];
     fetch(`http://localhost:3001/heycart/api/v1/products?search=${event.target.value}&selectFields=name`)
     .then(response => response.json())
     .then(response => {
       if(response.data.length > 0) {
         response.data.map(value => {
           updatedSearchOptions.push(value.name);         
         });        
         updateState(state => {
           return {
             ...state,
             searchOptions: [...updatedSearchOptions]
           }
         })
       }      
     })
   }, [state]);
  
  return (
    <NavigationContext.Provider value={useMemo(() => {return {searchOptions: state.searchOptions, searchChangeHandler}}, [state, searchChangeHandler])}>
      <Toolbar />
        <Switch>  
          <Route path='/' exact  component={Home} />
          <Route path='/:category' exact  component={Category} />
        </Switch>
      <Footer />
    </ NavigationContext.Provider>
  );
}

export default React.memo(App);
