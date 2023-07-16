import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Newsletters from './components/Newsletters';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/ShopPage';
import Blog from './components/BlogPage'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [currentPage, setCurrentPage] = useState("home-btn");
  const navBtn = document.querySelectorAll(".nav-option");
  navBtn.forEach((btn) => {
    if (btn.classList.contains(currentPage)) {
      btn.classList.add("active");
    }
    else {
      btn.classList.remove("active");
    }
  })
  
  let handleShowSideMenu = () => {
    const sideMenu = document.querySelector("#side-menu");
    sideMenu.style.display = "block";
  }
  let handleRemoveSideMenu = () => {
    const sideMenu = document.querySelector("#side-menu");
    sideMenu.style.display = "none";
  }
  return (
    <>
    <Router>
      <Navbar handleShowSideMenu={handleShowSideMenu} handleRemoveSideMenu={handleRemoveSideMenu} />
      <Routes>
        <Route exact path='/' element={
          <Home setCurrentPage={setCurrentPage} />
        }></Route>
        <Route exact path='/shop' element={
          <Shop setCurrentPage={setCurrentPage} />
        }></Route>
        <Route exact path='/blogs' element={
          <Blog setCurrentPage={setCurrentPage} />
        }></Route>
      </Routes>
      <Newsletters />
      <Footer />
      </Router>
    </>
  );
}

export default App;
