import React from "react";
import './App.css';
import ProductDetail from './containers/ProductDetail';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./containers/Header";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <ProductDetail/>
    </React.Fragment>
  );
}

export default App;
