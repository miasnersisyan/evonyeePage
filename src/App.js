
import './Assets/global.css'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Pages/about/about';
import Contact from './Pages/contact/contact';
import Home from './Pages/home/home';
import Testimonial from './Pages/testimonial/testimonial';
import Whatwedo from './Pages/whatwedo/whatwedo';

import { Routes, Route } from "react-router-dom"
import MenuComp from './Components/menuComp/menuComp';

function App() {
  return (
    <div className="App">
      <Header />
      <MenuComp />
       <Routes>

         <Route path="/" element={ <Home /> } />
         <Route path="/About" element={ <About /> } />
         <Route path="/WhatWeDo" element={ <Whatwedo /> } />
         <Route path="/Testimonial" element={  <Testimonial /> } />
         <Route path="/Contact" element={  <Contact /> } />
            
       </Routes>

      <Footer />
    </div>
  );
}

export default App;
