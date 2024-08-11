import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Signin from './components/signin/Signin';
import Product from './components/product/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' Component={Login}/>
        <Route exact path='/' Component={Signin}/>
        <Route exact path='/product' Component={Product}/>
      </Routes>
    </Router>
  );
}

export default App;