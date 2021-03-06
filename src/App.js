import React from "react";
//Components and Pages
import Home from "./pages/Home";
//Styles
import { GlobalStyles } from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
