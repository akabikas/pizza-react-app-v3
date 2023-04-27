import React from 'react';

function Header() {
  return (
    <nav className="nav-container shadow">
      <div className="nav-left">
        <a href="/" className="nav-brand">PIZZA</a>
      </div>
      <div className="nav-right">
        <a href="/dashboard" className="nav-link">Dashboard</a>
        <a href="/order" className="nav-link">Order Now</a>
        <a href="/login" className="nav-link registerBtn">Login/Register</a>
      </div>
    </nav>
  );
}

export default Header;
