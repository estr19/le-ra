import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import MeetUs from './MeetUs';
import ContactUs from './ContactUs';
import Main from './Main';

function App() {
  return(
    <div className='background'>
      <Router>
        <nav className='top'>
          <Link to='/' className='link' >Home</Link>
          <Link to='/meetus' className='link' >Meet Us</Link>
          <Link to='/contact' className='link' >Contact Us</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/meetus' element={<MeetUs />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
          <Route path='/home' element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;