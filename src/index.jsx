import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './utils/styles/base';
import './utils/libs/fontawesome';

import Header from './Public/components/Header';
import Public from './Public';
import User from './User';
import Admin from './Admin';
import Footer from './Public/components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Router>
         <Header />
         <GlobalStyle />
         <Routes>
            <Route exact path="/*" element={<Public />} />
            <Route exact path="/user/*" element={<User />} />
            <Route exact path="/admin/*" element={<Admin />} />
         </Routes>
      </Router>
      <Footer />
   </React.StrictMode>
);
