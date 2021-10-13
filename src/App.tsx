import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { MainHeader } from "./Modules";
import { MainSwitch } from "./Pages";

function App(): ReactElement {
  return (
    <BrowserRouter>
      <MainHeader />
      <MainSwitch />
    </BrowserRouter>
  );
}

export default App;
