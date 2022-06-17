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

function Nav() {
   return (
      <NavStyle>
         <UlStyle>
            <LiStyle>Accueil</LiStyle>
            <LiStyle>Tous les profiles</LiStyle>
            <LiStyle>Paramètres</LiStyle>
         </UlStyle>
      </NavStyle>
   );
}

export default Nav;
