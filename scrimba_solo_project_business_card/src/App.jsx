import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="container-fluid">
      <div className="display-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
