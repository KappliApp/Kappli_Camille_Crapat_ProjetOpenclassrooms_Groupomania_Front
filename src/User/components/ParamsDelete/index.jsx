import { useState } from 'react';
import styled from 'styled-components';

import colors from '../../../utils/styles/colors';

const ParamsStyle = styled.div`
   width: 35%;
   border-radius: 20px;
   padding: 15px 15px 30px 15px;
   background-color: ${colors.white};
   margin: 15px auto 15px auto;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const ParamsTitleStyle = styled.h2`
   font-size: 24px;
   margin-bottom: 15px;
`;

const ParamsTextStyle = styled.p`
   font-size: 18px;
   margin-bottom: 12px;
   text-align: center;
`;

const ParamsErrorStyle = styled.p`
   color: ${colors.error};
   font-size: 18px;
   font-weight: bold;
`;

const ParamsButtonStyle = styled.button`
   display: flex;
   justify-content: center;
   background-color: ${colors.secondary};
   align-items: center;
   width: 65%;
   height: 55px;
   border-radius: 7px;
   border: 0;
   font-weight: bold;
   font-size: 18px;
   margin-top: 12px;
   color: ${colors.white};
   cursor: pointer;
   &:hover {
      background-color: ${colors.secondary_light};
   }
`;

function ParamsDelete({ user, setUser, token, setToken }) {
   const [messageErrorDelete, setMessageErrorDelete] = useState('');
   const [loadingDataDelete, setLoadingDataDelete] = useState(false);

   return (
      <ParamsStyle>
         <ParamsTitleStyle>Compte</ParamsTitleStyle>
         <ParamsTextStyle>
            Vous pouvez désactiver votre compte. Pour le réactiver, contactez le
            service des Ressources Humaines
         </ParamsTextStyle>
         <ParamsErrorStyle>{messageErrorDelete}</ParamsErrorStyle>
         <ParamsButtonStyle>Désactiver mon compte</ParamsButtonStyle>
      </ParamsStyle>
   );
}

export default ParamsDelete;
