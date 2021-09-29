import React from "react";
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <ProductList/>
    </React.Fragment>
  );
}

export default App;
