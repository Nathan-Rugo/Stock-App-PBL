import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Stocks from './pages/Stocks';
import './App.css';
import Layout from './components/Layout';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/stocks/:symbol' element={<Stocks />} />
      </Route>
    </Routes>    
    </BrowserRouter>
  );
}

export default App;