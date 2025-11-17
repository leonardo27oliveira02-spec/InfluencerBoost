import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Analyses from './pages/Analyses';
import Boost from './pages/Boost';
import Messages from './pages/Messages';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/analyses' element={<Analyses />} />
          <Route path='/boost' element={<Boost />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
