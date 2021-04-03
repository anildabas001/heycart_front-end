import './App.css';
import React, {useEffect, useState} from 'react';
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
import ProductPage from './Containers/ProductPage/ProductPage';
import Cart from './Containers/Cart/cart';
import {connect} from 'react-redux';
import {syncCart} from './Store/Actions/CartAction';

function App(props) {

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

   useEffect(() => {
    if (props.isLoggedin) {
      props.syncCartData();
      //props.loadCartDb();
    }
  }, [props.isLoggedin]);

   
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

  // const searchClickHandler = (event) => {
  // }
  
  return (
    <NavigationContext.Provider value={{searchOptions: state.searchOptions}}>
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
          <Route path='/product/:productName/:productid' exact component={ProductPage} />
          <Route path='/cart' exact  component={Cart} />
          <Route path='/:category' exact  component={Category} />
        </Switch>
      <Footer />
    </ NavigationContext.Provider>
  );
}

const mapDispatchToProps = (dispatch => {
  return {
    syncCartData: () => dispatch(syncCart())
   }
});

const mapStateToProps = (state => {
  return { 
      cartData: state.cartData,
      isLoggedin: state.authentication.isLoggedin
    }    
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
