import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './utils/styles/base';
import './utils/libs/fontawesome';

import Public from './Public';
import Auth from './Auth';
import Footer from './Public/components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Router>
         <GlobalStyle />
         <Routes>
            <Route exact path="/*" element={<Public />} />
            <Route exact path="/auth/*" element={<Auth />} />
         </Routes>
      </Router>
      <Footer />
   </React.StrictMode>
);
