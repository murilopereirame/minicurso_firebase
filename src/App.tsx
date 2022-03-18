import React from "react";
import "./App.css";

import { getRemoteConfig } from "firebase/remote-config";
const remoteConfig = getRemoteConfig();

function App() {
  return (
    <div className="App">
      <h1>Olá! Bem vindo ao mini curso de Firebase!</h1>
    </div>
  );
}

export default App;
