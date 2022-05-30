import { Fragment } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import AllPosts from './pages/AllPosts';

function User() {
   return (
      <Fragment>
         <Header />
         <Routes>
            <Route path="allposts" element={<AllPosts />} />
         </Routes>
      </Fragment>
   );
}

export default User;
