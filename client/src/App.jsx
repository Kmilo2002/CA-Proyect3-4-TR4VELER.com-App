import './App.css';
// import React, {useState, useEffect} from "react"
import Pages from './Components/Pages/Pages';
import NavBars from './Components/NavBars/NavBars';
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <div className="App">
      <NavBars></NavBars>
      <Pages></Pages>
      <Footer></Footer>
    </div>
  );
}

export default App;
