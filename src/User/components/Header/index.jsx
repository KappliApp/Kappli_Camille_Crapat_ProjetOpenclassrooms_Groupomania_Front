import { Link } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../../utils/styles/colors';

import logo from '../../../assets/img/icon-left-font-monochrome-white.svg';

import Profile from '../Profile';

const HeaderStyle = styled.header`
   background-color: ${colors.primary};
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   height: 95px;
   padding: 0 25px 0 25px;
`;

const LogoStyle = styled.img`
   height: 60px;
`;

function Header() {
   return (
      <HeaderStyle>
         <Link to="/user/allposts">
            <LogoStyle src={logo} alt="Logo de la société Groupomania" />
         </Link>
         <Profile />
      </HeaderStyle>
   );
}

export default Header;
