import { useState } from 'react';
import styled from 'styled-components';

import colors from '../../../utils/styles/colors';

import Input from '../Input';

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
   background-color: ${colors.primary};
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
      background-color: ${colors.primary_light};
   }
`;

function ParamsSecurity({ user, setUser, token, setToken }) {
   const [password, setPassword] = useState('');
   const [errorPassword, setErrorPassword] = useState();
   const [newPassword, setNewPassword] = useState('');
   const [errorNewPassword, setErrorNewPassword] = useState();
   const [confirmNewPassword, setConfirmNewPassword] = useState('');
   const [errorConfirmNewPassword, setErrorConfirmNewPassword] = useState();
   const [messageErrorSecurity, setMessageErrorSecurity] = useState('');
   const [loadingDataSecurity, setLoadingDataSecurity] = useState(false);

   return (
      <ParamsStyle>
         <ParamsTitleStyle>Sécurité</ParamsTitleStyle>
         <ParamsTextStyle>
            Vous pouvez modifier votre mot de passe. Il doit contenir au moins 8
            caractères, dont au minimum 1 majuscule, 1 minuscule, 1 chiffre et 1
            caractère spécial
         </ParamsTextStyle>
         <Input
            type="password"
            name="password"
            value={password}
            setValue={setPassword}
            error={errorPassword}
            setError={setErrorPassword}
            setMessageError={setMessageErrorSecurity}
         />
         <Input
            type="password"
            name="newPassword"
            value={newPassword}
            setValue={setNewPassword}
            error={errorNewPassword}
            setError={setErrorNewPassword}
            setMessageError={setMessageErrorSecurity}
         />
         <Input
            type="password"
            name="confirmNewPassword"
            value={confirmNewPassword}
            setValue={setConfirmNewPassword}
            error={errorConfirmNewPassword}
            setError={setErrorConfirmNewPassword}
            setMessageError={setMessageErrorSecurity}
         />
         <ParamsErrorStyle>{messageErrorSecurity}</ParamsErrorStyle>
         <ParamsButtonStyle>Modifier mon mot de passe</ParamsButtonStyle>
      </ParamsStyle>
   );
}

export default ParamsSecurity;
