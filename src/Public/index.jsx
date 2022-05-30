import { Fragment } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header/index';
import Login from './pages/Login';

function Public() {
   let path = useLocation().pathname;
   return (
      <Fragment>
         <Header />
         <Routes>
            <Route path={path} element={<Login />} />
         </Routes>
      </Fragment>
   );
}

export default Public;
