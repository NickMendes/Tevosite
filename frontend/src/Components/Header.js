import React from 'react';

function Header() {
  return (
    <ul className="nav nav-tabs static-top header-all">
      <li className="nav-item">
        <a className="nav-link text-dark" href="/">
          <h4>Home</h4>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="/sobremim">
          <h4>Home</h4>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="/curriculo">
          <h4>Home</h4>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="/portifolio">
          <h4>Home</h4>
        </a>
      </li>
    </ul>
  )
}

export default Header;