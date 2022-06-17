import { useState } from 'react';
import styled from 'styled-components';

import colors from '../../../../../utils/styles/colors';

import Input from './Input';

const ConnexionFormStyle = styled.form`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 300px;
`;

const ConnexionErrorStyle = styled.div`
   color: ${colors.error};
   font-size: 20px;
   font-weight: bold;
`;

const ConnexionButtonStyle = styled.button`
   background-color: ${colors.primary};
   width: 82%;
   height: 55px;
   border-radius: 7px;
   border: 0;
   font-weight: bold;
   font-size: 18px;
   color: ${colors.white};
   margin-top: 20px;
   cursor: pointer;
   &:hover {
      background-color: #1b3765;
   }
`;

function Form({ user, setUser }) {
   const [mail, setMail] = useState('');
   const [errorMail, setErrorMail] = useState();
   const [errorPassword, setErrorPassword] = useState();
   const [password, setPassword] = useState('');
   const [messageError, setMessageError] = useState('');

   return (
      <ConnexionFormStyle>
         <Input
            type="email"
            name="mail"
            placeholder="Adresse e-mail"
            value={mail}
            setValue={setMail}
            error={errorMail}
            setError={setErrorMail}
         />
         <Input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={password}
            setValue={setPassword}
            error={errorPassword}
            setError={setErrorPassword}
         />
         <ConnexionErrorStyle>{messageError}</ConnexionErrorStyle>
         <ConnexionButtonStyle>Connexion</ConnexionButtonStyle>
      </ConnexionFormStyle>
   );
}

export default Form;
