import styled from 'styled-components';

import colors from '../../../utils/styles/colors';

import Logo from '../../../assets/img/icon-left-font-monochrome-white.svg'

const HeaderStyle = styled.header`
background-color: ${colors.primary};
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 95px;`;

const LogoStyle = styled.img`
height: 65px;`

function Header() { 
    return(
    <HeaderStyle>
        <LogoStyle src={Logo} alt='Logo de la société Groupomania' />
    </HeaderStyle>
    )
}

export default Header;