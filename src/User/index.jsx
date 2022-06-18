import { Fragment, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Nav from './components/Nav';
import AllPosts from './pages/AllPosts';
import AllProfiles from './pages/AllProfiles';
import Params from './pages/Params';

function User() {
   let navigate = useNavigate();
   const [user, setUser] = useState();
   const [token, setToken] = useState();
   useEffect(() => {
      const verifLogin = () => {
         const user = JSON.parse(localStorage.getItem('user'));
         const token = localStorage.getItem('token');
         if (!token || !user) {
            navigate('/');
         }
      };
      const saveLogin = () => {
         const user = JSON.parse(localStorage.getItem('user'));
         const token = localStorage.getItem('token');
         if (token && user) {
            setUser(user);
            setToken(token);
         }
      };
      verifLogin();
      saveLogin();
   }, [navigate]);
   return (
      <Fragment>
         <Nav user={user} setUser={setUser} token={token} setToken={setToken} />
         <Routes>
            <Route
               path="allposts"
               element={
                  <AllPosts
                     user={user}
                     setUser={setUser}
                     token={token}
                     setToken={setToken}
                  />
               }
            />
            <Route
               path="allprofiles"
               element={
                  <AllProfiles
                     user={user}
                     setUser={setUser}
                     token={token}
                     setToken={setToken}
                  />
               }
            />
            <Route
               path="params"
               element={
                  <Params
                     user={user}
                     setUser={setUser}
                     token={token}
                     setToken={setToken}
                  />
               }
            />
         </Routes>
      </Fragment>
   );
}

export default User;
