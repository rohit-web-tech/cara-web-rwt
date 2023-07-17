import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Newsletters from './components/Newsletters';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/ShopPage';
import Blog from './components/BlogPage'
import About from './components/AboutPage'
import Contact from './components/ContactPage'
import Cart from './components/CartPage'
import ScrollToTop from './components/ScrollToTop'
import loader from './loader.gif' ;
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  let triggerLoader= () =>{
    setTimeout(()=>{
      const loader = document.querySelector("#loader");
      const web = document.querySelector("#main-web");
      web.style.display = "none";
      loader.style.display = "flex";
      setTimeout(()=>{
      loader.style.display = "none";
      web.style.display = "block";
      },2000);
    },0);
  }
  // triggerLoader();
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
        <ScrollToTop />
        <div id="loader" className='flex-box justify-center align-center'>
          <img src={loader} alt="" />
        </div>
        <div id="main-web">
        <Navbar handleShowSideMenu={handleShowSideMenu} handleRemoveSideMenu={handleRemoveSideMenu} />
        <Routes>
          <Route exact path='/' element={
            <Home setCurrentPage={setCurrentPage}  triggerLoader={triggerLoader}/>
          }></Route>
          <Route exact path='/shop' element={
            <Shop setCurrentPage={setCurrentPage}  triggerLoader={triggerLoader}/>
          }></Route>
          <Route exact path='/blogs' element={
            <Blog setCurrentPage={setCurrentPage}  triggerLoader={triggerLoader}/>
          }></Route>
          <Route exact path='/about' element={
            <About setCurrentPage={setCurrentPage} triggerLoader={triggerLoader} />
          }></Route>
          <Route exact path='/contact' element={
            <Contact setCurrentPage={setCurrentPage}  triggerLoader={triggerLoader}/>
          }></Route>
          <Route exact path='/cart' element={
            <Cart setCurrentPage={setCurrentPage}  triggerLoader={triggerLoader}/>
          }></Route>
        </Routes>
        <Newsletters />
        <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
