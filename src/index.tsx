import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAu9ZB7kEdwu8IHPG7oy3l6x8WPxospEac",
  authDomain: "minicurso-31bb1.firebaseapp.com",
  projectId: "minicurso-31bb1",
  storageBucket: "minicurso-31bb1.appspot.com",
  messagingSenderId: "225268834468",
  appId: "1:225268834468:web:1cd776b75dd486ea3a4631",
  measurementId: "G-C1DHV1TJMN",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
