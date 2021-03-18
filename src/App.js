import './App.css';
import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Toolbar from '../src/Components/Toolbar/Toolbar';
import Footer from '../src/Components/Footer/Footer';
import Category from './Containers/Category/Category';
import NavigationContext from './Context/NavigationContext';
import SideBar from './Components/SideBar/SideBar';
import BackScreen from './Components/UI/BackScreen/BackScreen';
import SearchPage from './Containers/SearchPage/Searchpage';
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

   
  //  const searchChangeHandler = (event) => {
  //    const updatedSearchOptions = [];
  //    fetch(`http://localhost:3001/heycart/api/v1/products?search=${event.target.value}&selectFields=name`)
  //    .then(response => response.json())
  //    .then(response => {
  //      if(response.data.length > 0) {
  //        response.data.map(value => {
  //          updatedSearchOptions.push(value.name);         
  //        });        
  //        updateState(state => {
  //          return {
  //            ...state,
  //            searchOptions: [...updatedSearchOptions]
  //          }
  //        })
  //      }      
  //    })
  //  };

  const searchClickHandler = (event) => {
    console.log(event.target);
  }
  
  return (
    <NavigationContext.Provider value={{searchOptions: state.searchOptions, searchClickHandler}}>
      <Toolbar crossHamBurger={sidebarState.showSideBar} sideBarHandler={sideBarHandler}/>
      <div>
        <ResponsiveSearchbar navigationData={
          {
            placeholder: 'Search for products'
          } 
        } />
      </div>      
      <SideBar sideBarVisible={sidebarState.showSideBar} sideBarHandler={sideBarHandler} />
      <BackScreen backScreenHandler = {sideBarHandler} showBackScreen={sidebarState.showSideBar}/>
        <Switch>  
          <Route path='/' exact  component={Home} />
          <Route path='/search' exact  component={SearchPage} />
          <Route path='/:category' exact  component={Category} />
        </Switch>
      <Footer />
    </ NavigationContext.Provider>
  );
}

export default React.memo(App);
