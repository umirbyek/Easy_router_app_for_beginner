import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductCardItem from "./Components/ProductCard";
import Product from "./Components/Product";

function App() {
  return (
    <div className="relative pb-10 ">
      <Router>
        <Header />
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product/:id">
             <Product/>
            </Route>
          </Switch>
        </div>

        <Footer  />
      </Router>
    </div>
  );
}

export default App;
