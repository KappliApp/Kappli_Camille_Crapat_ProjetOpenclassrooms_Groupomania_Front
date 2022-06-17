import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import AllPosts from './pages/AllPosts';

function User() {
   return (
      <Fragment>
         <Routes>
            <Route path="allposts" element={<AllPosts />} />
         </Routes>
      </Fragment>
   );
}

export default User;
