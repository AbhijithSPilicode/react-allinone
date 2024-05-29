import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './assets/pages/Home';
import Help from './assets/pages/Help';
import Form from './assets/pages/RegistrationForm';
import SearchBox from './assets/pages/Searchbox';

function App() {
  const [searchBook, setSearchBook] = useState('');

  return (
    <>
      <nav>
        <ul className="nav-left">
          <li><Link to='/'><img src='https://img.freepik.com/premium-vector/google-play-3d-rendering-icon_578229-292.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716508800&semt=ais_user' height='40px' width='40px'/>Google Play</Link></li>
        </ul>
        <ul className="nav-right">
          <li><SearchBox searchBook={searchBook} setSearchBook={setSearchBook} /></li>
          <li><Link to='/RegistrationForm'>Register</Link></li>
          <li><Link to='/Help'>Help</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home searchBook={searchBook} />} />
        <Route path="/RegistrationForm" element={<Form />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
