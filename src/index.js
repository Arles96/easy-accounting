/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import {addAccounts, getAccounts} from './api/accountsApi';
import accounts from './extra/accounts';
import './App.css';

import AdminLayout from "layouts/Admin.js";

async function addAccount(){
  try{
    const {data} = await getAccounts()
    console.log(data);
    if(data.rows.length===0){
      for (let index = 0; index < accounts.accounts.length; index++) {
        await addAccounts({code:accounts.accounts[index][0], name:accounts.accounts[index][1], description: "", type: accounts.accounts[index][2]})
      }
    }
    const {data2} = await getAccounts()
    console.log(data2);
  }
  catch(error){
    console.log(error)
  }
  
}

addAccount()
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/catalogue" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
