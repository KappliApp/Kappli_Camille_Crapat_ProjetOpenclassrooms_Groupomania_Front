import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Public from './Public';
import User from './User';
import Admin from './Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={ <Public /> } />
        <Route path='/user' element={ <User/> }/>
        <Route path='/admin' element={ <Admin/> } />
      </Routes>
    </Router>
  </React.StrictMode>
);