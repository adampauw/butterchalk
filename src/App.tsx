import React from "react";

import FancyButton from "./components/header/FancyButton";
import { Info } from "./components/info/Info";
import { Blog } from "./components/blog/Blog";
import Background from "./components/header/Background";

import "./App.scss";


const App: React.FC = () => {

  return (
    <div className="App">
      <Background/>
      <div className="Content">
        <Info />
        <FancyButton />
        <Blog />
      </div>
    </div>
  );
};

export default App;
