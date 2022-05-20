import { Fragment } from 'react';
import styled from 'styled-components';

import colors from '../../../utils/styles/colors';

const ConnexionStyle = styled.div`
   background-color: ${colors.primary};
   min-height: 82vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const ConnexionContainerStyle = styled.div`
   background-color: ${colors.white};
   height: 450px;
   width: 30%;
   border-radius: 25px;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   padding: 35px;
`;

const ConnexionTitleStyle = styled.h2`
   font-size: 24px;
   margin-bottom: 55px;
`;

const ConnexionFormStyle = styled.form`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 300px;
`;

const ConnexionInputStyle = styled.input`
   width: 82%;
   height: 55px;
   border-radius: 7px;
   border: 1px solid ${colors.grey_dark};
   margin-bottom: 35px;
   padding-left: 15px;
   font-size: 18px;
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
   cursor: pointer;
`;

function Login() {
   return (
      <ConnexionStyle>
         <ConnexionContainerStyle>
            <ConnexionTitleStyle>Connexion</ConnexionTitleStyle>
            <ConnexionFormStyle>
               <ConnexionInputStyle name="mail" placeholder="Adresse e-mail" />
               <ConnexionInputStyle
                  name="password"
                  placeholder="Mot de passe"
               />
               <ConnexionButtonStyle>Connexion</ConnexionButtonStyle>
            </ConnexionFormStyle>
         </ConnexionContainerStyle>
      </ConnexionStyle>
   );
}

export default Login;
