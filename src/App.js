import React, { createContext, useState,useContext} from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navigation from './layout/Navigation';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Modal from './cartstore/Modal';
export const cartstore=createContext();
const App  = () => {
  const storedValue = localStorage.getItem('login');
const yourVariable = storedValue === null ? false : true;
  const[cart,setCart]=useState([]);
  const[showcart,setShowcart]=useState(false);
  const[login,setLogin]=useState(yourVariable);
  return (
    <cartstore.Provider value={[cart,setCart,showcart,setShowcart,login,setLogin]}>
    <div className='App'>
      <BrowserRouter >
      <div style={{position:'sticky',zIndex:9999}}>
        <Navigation/>
      </div>
    
        <Routes>
          
          <Route path='/' exact Component={Home}/>
          {!(login) &&<Route path='/store' Component={Login}/>}
          {login &&<Route path='/store' Component={Store}/>}
          <Route path='/about' Component={About}/>
          <Route path='/login' Component={Login}/>
          <Route path='/contact' Component={Contact}/>
        </Routes>
      </BrowserRouter>
      {showcart && <Modal show={showcart} closeModal={setShowcart}/>}
    </div>
    </cartstore.Provider>
  )
}

export default App;