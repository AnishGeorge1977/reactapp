import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <nav className={"navbar navbar-expand-sm navbar-dark bg-dark mb-3"}>
    <div className={"container"}>
      <a href="/" className={"navbar-brand"}>Anish George</a>
      <button className={"navbar-toggler"} data-toggle="collapse" data-target="#navbarCollapse">
        <span className={"navbar-toggler-icon"}></span>
      </button>
      <div className={"collapse navbar-collapse"} id="navbarCollapse">
        <ul className={"navbar-nav ml-auto"}>
          <li className={"nav-item"}>
            <a href="/" className={"nav-link"}>Home</a>
          </li>
          <li className={"nav-item"}>
            <a href="/profile" className={"nav-link"}>Profile</a>
          </li>
          <li className={"nav-item"}>
            <a href="/download" className={"nav-link"}>Resume</a>
          </li>
          <li className={"nav-item"}>
            <a href="/blog" className={"nav-link"}>Blog</a>
          </li>
          <li className={"nav-item"}>
            <a href="/landing" className={"nav-link"}>Contact</a>
          </li>
          <li className={"nav-item"}>
              <a href="/logout" className={"nav-link"}>Log Out</a>
            </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
