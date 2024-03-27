import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Router>
      
      <div className="navbar">
      <div className='space'></div>
        <Link to="/"><img className='nav-img' src="/assets/Navbar/1.png" alt="Image 1" /></Link>
        <Link to="/"><img className='nav-img' src="/assets/Navbar/2.png" alt="Image 2" /></Link>
        <Link to="/"><img className='nav-img' src="/assets/Navbar/3.png" alt="Image 3" /></Link>
        <Link to="/"><img className='nav-img' src="/assets/Navbar/4.png" alt="Image 4" /></Link>
        <Link to="/"><img className='nav-img co2' src="/assets/Navbar/5.png" alt="Image 5" /></Link>
        <Link to="/"><img className='nav-img final' src="/assets/Navbar/6.png" alt="Image 6" /></Link>
      </div>
    </Router>
  );
};

export default Navbar;

{/* <Route exact path="/" component={HomePage} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
      <Route path="/page4" component={Page4} /> */} 