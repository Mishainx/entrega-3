import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Router from './screens/Router';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBByoQpGx4Y9ZfK0GQkNuiKidy3nenPxgU",
  authDomain: "e-commerce-8037b.firebaseapp.com",
  projectId: "e-commerce-8037b",
  storageBucket: "e-commerce-8037b.appspot.com",
  messagingSenderId: "185780706861",
  appId: "1:185780706861:web:b2acb12264e8b7a19b62a4"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
