import { Routes, Route } from 'react-router-dom';

import User from './User';
import Admin from './Admin';

function Auth() {
   return (
      <Routes>
         <Route path="user/*" element={<User />} />
         <Route path="admin/*" element={<Admin />} />
      </Routes>
   );
}

export default Auth;
