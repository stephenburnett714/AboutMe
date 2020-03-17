import React from 'react';
import Main from './components/Main'
import NavBar from './components/NavBar'
import Footer from './components/NavBar'
import { Route } from 'react-router-dom'
import './App.css';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Footer >


      <Route exact path="/">
        <HomePage/>
      </Route>
    </div>
  );
}

