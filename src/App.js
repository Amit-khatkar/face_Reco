import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './screens/auth/login';
import Dashboard from './screens/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
import { BrowserRouter, Route, Router } from "react-router-dom";

export default class App extends React.Component {

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyD50Kj8pvNrh3CVFsrctALwqbTflnNazjY",
      authDomain: "private-notes-9cc59.firebaseapp.com",
      databaseURL: "https://private-notes-9cc59.firebaseio.com",
      projectId: "private-notes-9cc59",
      storageBucket: "private-notes-9cc59.appspot.com",
      messagingSenderId: "122552020693",
      appId: "1:122552020693:web:0d57b1482e43233d10fc5c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

render(){
  return (
    <BrowserRouter>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Dashboard} />
    </BrowserRouter>
  );
}
}

