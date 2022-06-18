import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../../utils/styles/colors';

const NavStyle = styled.nav`
   width: 100%;
   height: 65px;
   display: flex;
   justify-content: center;
   align-items: center;
   box-shadow: 0px 0px 4px ${colors.grey_dark};
`;
const UlStyle = styled.ul`
   width: 50%;
   height: 65px;
   display: flex;
   justify-content: space-around;
   align-items: center;
`;

const LiStyle = styled.li`
   list-decoration: none;
   width: 20%;
   height: 65px;
   display: flex;
   justify-content: center;
   align-items: center;
`;

function Nav({ user, setUser, token, setToken }) {
   let navigate = useNavigate();
   const signOut = (e) => {
      e.preventDefault();
      localStorage.clear();
      navigate('/');
      setUser('');
      setToken('');
   };
   return (
      <NavStyle>
         <UlStyle>
            <LiStyle>
               <Link to="/user/allposts">Accueil</Link>
            </LiStyle>
            <LiStyle>
               <Link to="/user/allprofiles">Tous les profiles</Link>
            </LiStyle>
            <LiStyle>
               <Link to="/user/params">Paramètres</Link>
            </LiStyle>
            <LiStyle>
               <a href="" onClick={(e) => signOut(e)}>
                  Déconnexion
               </a>
            </LiStyle>
         </UlStyle>
      </NavStyle>
   );
}

export default Nav;
