import './App.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Toolbar from '../src/Components/Toolbar/Toolbar';
import Footer from '../src/Components/Footer/Footer';

function App() {
  return (
    <>
      <Toolbar />
      <Switch>  
        <Route path='/' exact  component={Home} />
      </Switch>
      <Footer />
    </>        
  );
}

export default App;
