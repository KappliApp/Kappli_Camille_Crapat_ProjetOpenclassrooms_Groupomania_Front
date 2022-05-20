import styled from 'styled-components';

import colors from '../../../utils/styles/colors';

const FooterStyle = styled.footer`
   background-color: ${colors.primary};
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 95px;
   font-weight: bold;
   font-size: 20px;
   color: ${colors.white};
`;

function Footer() {
   return (
      <FooterStyle>
         ©2022 - Camille CRAPAT - Projet Openclassrooms - Tout droit réservé
      </FooterStyle>
   );
}

export default Footer;
