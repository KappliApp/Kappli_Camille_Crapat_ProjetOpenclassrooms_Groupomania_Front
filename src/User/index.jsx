import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import AllPosts from './pages/AllPosts';

function User() {
   return (
      <Fragment>
         <Nav />
         <Routes>
            <Route path="allposts" element={<AllPosts />} />
         </Routes>
      </Fragment>
   );
}

export default User;
