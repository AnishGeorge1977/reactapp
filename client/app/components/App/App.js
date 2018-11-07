import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';


const App = ({ children }) => (
  <div>
    <Header />
    <div className="container">
    <main>
      {children}
    </main>
    </div>
  </div>
);

export default App;
