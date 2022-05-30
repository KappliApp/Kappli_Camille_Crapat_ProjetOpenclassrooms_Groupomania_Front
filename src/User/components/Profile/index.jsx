import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import colors from '../../../utils/styles/colors';

const ProfileStyle = styled.div`
   background-color: ${colors.grey_dark};
   color: ${colors.white};
   font-size: 1.5em;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 55px;
   height: 55px;
   border-radius: 55px;
`;

function Profiles() {
   return (
      <ProfileStyle>
         <FontAwesomeIcon icon="user" />
      </ProfileStyle>
   );
}

export default Profiles;
