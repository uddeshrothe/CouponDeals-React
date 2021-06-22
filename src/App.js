import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Home'
import Service from './Service';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/service" component={Service}/>
      <Route path="/" component={Home}/>
      <Redirect to="/" />
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
