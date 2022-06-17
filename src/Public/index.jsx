import { Fragment } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Login from './pages/Login';

function Public() {
   let path = useLocation().pathname;
   return (
      <Fragment>
         <Routes>
            <Route path={path} element={<Login />} />
         </Routes>
      </Fragment>
   );
}

export default Public;
