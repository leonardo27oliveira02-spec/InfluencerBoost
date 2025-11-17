import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const activeStyle = { color: '#FFCE4A' };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#121212', padding: '10px 0' }}>
      <Link to="/" style={location.pathname === '/' ? activeStyle : { color: '#7047EB' }}>Home</Link>
      <Link to="/analyses" style={location.pathname === '/analyses' ? activeStyle : { color: '#7047EB' }}>Análises</Link>
      <Link to="/boost" style={location.pathname === '/boost' ? activeStyle : { color: '#7047EB' }}>Boost</Link>
      <Link to="/messages" style={location.pathname === '/messages' ? activeStyle : { color: '#7047EB' }}>DM</Link>
      <Link to="/profile" style={location.pathname === '/profile' ? activeStyle : { color: '#7047EB' }}>Perfil</Link>
    </nav>
  );
};

export default Navbar;
