import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import GlobalStyle from './utils/styles/base';

import Public from './Public';
import User from './User';
import Admin from './Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <GlobalStyle/>
      <Routes>
        <Route exact path="/*" element={ <Public /> } />
        <Route exact path='/user/*' element={ <User/> }/>
        <Route exact path='/admin/*' element={ <Admin/> } />
      </Routes>
    </Router>
  </React.StrictMode>
);