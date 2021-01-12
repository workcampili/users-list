
import './App.css';
import React from 'react';
import {Route} from'react-router-dom'


import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {



  






  return (
    <div className="grid-container ">
      <NavBar/>
      <Route exact path="/" component ={HomePage}/>
      <Route exact path="/about" component ={AboutPage}/>
      <Route exact path="/contact" component ={ContactPage}/>
      
      <Footer/>
    </div>
  );
}

export default App;
