import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import * as firebase from 'firebase/app';
import {getAuth} from  "firebase/auth"
import {Firestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration


interface config {
  apiKey: string, 
  authDomain: string, 
  projectId: string, 
  storageBucket: string, 
  messagingSenderId: string, 
  appId: string, 
}

const firebaseConfig:config = {
  apiKey: "AIzaSyDnL5l-rnLqiqBew4mAds3IYH4Xt_mv_hY",
  authDomain: "react-chat-1dd2c.firebaseapp.com",
  projectId: "react-chat-1dd2c",
  storageBucket: "react-chat-1dd2c.appspot.com",
  messagingSenderId: "83771840528",
  appId: "1:83771840528:web:b2aaa91d90a342037c9295"

};


// Initialize Firebase

export const app:any = initializeApp(firebaseConfig);

export const Context = createContext<any|null>(null)

// const auth = firebase.auth();
// const firestore = firebase.firestore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
    app,
    getAuth,
    Firestore
  }}>
      <React.StrictMode>
    <App />
  </React.StrictMode>
  </Context.Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
