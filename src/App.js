import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import NavBar from './components/navbar';
import Home from './components/pages/home';
import Product from './components/pages/product';
import Products from './components/pages/products';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>}>
              <Route path=":product" element={<Product/>} />
            </Route>
          </Routes>
          </main>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
