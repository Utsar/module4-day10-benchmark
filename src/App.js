import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="appBody">
        <Sidebar />
        <Body />
      </div>

      <Footer />
    </div>
  );
}

export default App;
