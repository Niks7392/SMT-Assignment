import './App.css';
import NavBar from './Components/NavBar';
import Shop from './Components/Shop';
import React, { Component } from 'react'
import Footer from './Components/Footer';

export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <NavBar />
        {/* <Alert alert={alert} /> */}
        <div className="container">
          <Shop />
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
      </>
    )
  }
}

