import './App.css';
import React, {useCallback, useState, useMemo} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Toolbar from '../src/Components/Toolbar/Toolbar';
import Footer from '../src/Components/Footer/Footer';
import Category from './Containers/Category/Category';
import NavigationContext from './Context/NavigationContext';
import SideBar from './Components/SideBar/SideBar';
import BackScreen from './Components/UI/BackScreen/BackScreen';
import ResponsiveSearchbar from './Components/ResponsiveSerachbar/ResponsiveSerachbar';

function App() {

  const [sidebarState, sidebarSetState] = useState({
    showSideBar: false
  });

  const sideBarHandler = ()=> {
    sidebarSetState((state)=>{
        return {showSideBar: !state.showSideBar}
    });
  }


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
      <Toolbar crossHamBurger={sidebarState.showSideBar} sideBarHandler={sideBarHandler}/>
      <div>
        <ResponsiveSearchbar navigationData={
          {
            placeholder: 'Search for product'
          } 
        } />
      </div>      
      <SideBar sideBarVisible={sidebarState.showSideBar} sideBarHandler={sideBarHandler} />
      <BackScreen showBackScreen={sidebarState.showSideBar}/>
        <Switch>  
          <Route path='/' exact  component={Home} />
          <Route path='/:category' exact  component={Category} />
        </Switch>
      <Footer />
    </ NavigationContext.Provider>
  );
}

export default React.memo(App);
