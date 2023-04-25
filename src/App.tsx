import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";


// Components


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <Header/>
        </div>
        <div className="container"> 
        <Routes>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        </div>
        <div className="footer">
         <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
