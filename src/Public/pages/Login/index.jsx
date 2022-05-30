import styled from 'styled-components';

import colors from '../../../utils/styles/colors';

import Input from './components/Input';

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

function Login() {
   return (
      <ConnexionStyle>
         <ConnexionContainerStyle>
            <ConnexionTitleStyle>Connexion</ConnexionTitleStyle>
            <ConnexionFormStyle>
               <Input
                  type="email"
                  name="mail"
                  placeholder="Adresse e-mail"
                  res="error"
               />
               <Input
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  res="ok"
               />
               <ConnexionErrorStyle>
                  Votre adresse e-mail contient une erreur !
               </ConnexionErrorStyle>
               <ConnexionButtonStyle>Connexion</ConnexionButtonStyle>
            </ConnexionFormStyle>
         </ConnexionContainerStyle>
      </ConnexionStyle>
   );
}

export default Login;
