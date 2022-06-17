import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import colors from '../../../../utils/styles/colors';

const ButtonContainerStyle = styled.div`
   width: 100%;
   margin: 3px auto 0px auto;
   display: flex;
   justify-content: space-around;
`;

const ButtonStyle = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 50%;
   height: 38px;
   &:hover {
      cursor: pointer;
      background-color: ${colors.grey_dark};
   }
   ${(props) => props.$blue && `color: #1281e7; font-weight: bold;`}
`;

const ButtonIconStyle = styled.div`
   margin-right: 8px;
`;

function Button({ myLike }) {
   const button = (
      <ButtonIconStyle>
         <FontAwesomeIcon icon={['far', 'thumbs-up']} />
      </ButtonIconStyle>
   );
   return (
      <ButtonContainerStyle>
         {myLike.length > 0 ? (
            <ButtonStyle $blue>{button} J'aime</ButtonStyle>
         ) : (
            <ButtonStyle>{button} J'aime</ButtonStyle>
         )}
         <ButtonStyle>
            <ButtonIconStyle>
               <FontAwesomeIcon icon={['far', 'comment-dots']} />
            </ButtonIconStyle>
            Commenter
         </ButtonStyle>
      </ButtonContainerStyle>
   );
}

export default Button;
