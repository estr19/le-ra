import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Main from './Main';
import MeetUs from './MeetUs';
import RWRB from './RWRB';
import ContactUs from './ContactUs';

function App() {
  return(
    <div className='background'>
      <Router>
        <nav className='top'>
          <Link to='/' className='link' >Home</Link>
          <Link to='/meetus' className='link' >Meet Us</Link>
          <Link to='/rwrb' className='link' >RWRB</Link>
          <Link to='/contact' className='link' >Contact Us</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/meetus' element={<MeetUs />}></Route>
          <Route path='/rwrb' element={<RWRB />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
          <Route path='/home' element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;