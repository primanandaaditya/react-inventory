import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import JenisProduk from "./jenis_produk/JenisProduk";
import Home from "./home/Home";
import AddJenisProduk from "./jenis_produk/AddJenisProduk";
import EditJenisProduk from "./jenis_produk/EditJenisProduk";
import Produk from "./produk/Produk";
import AddProduk from "./produk/AddProduk";
import EditProduk from "./produk/EditProduk";

ReactDOM.render(
  <React.StrictMode>
      <Router basename="/react/inventory">
          <Switch>
              <Route exact path="/">
                  <App/>
              </Route>
              <Route exact path="/produk">
                  <Produk/>
              </Route>
              <Route exact path="/add_produk">
                  <AddProduk/>
              </Route>
              <Route exact path="/edit_produk/:id">
                  <EditProduk/>
              </Route>
              <Route exact path="/jenis_produk">
                  <JenisProduk/>
              </Route>
              <Route exact path="/home">
                  <Home/>
              </Route>
              <Route exact path="/add_jenis_produk">
                  <AddJenisProduk/>
              </Route>
              <Route exact path="/edit_jenis_produk/:id">
                  <EditJenisProduk/>
              </Route>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
