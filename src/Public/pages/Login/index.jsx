import { useState } from 'react';
import styled from 'styled-components';

import colors from '../../../utils/styles/colors';

import Form from './components/Form';

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

function Login() {
   const [user, setUser] = useState();

   return (
      <ConnexionStyle>
         <ConnexionContainerStyle>
            <ConnexionTitleStyle>Connexion</ConnexionTitleStyle>
            <Form user={user} setUser={setUser} />
         </ConnexionContainerStyle>
      </ConnexionStyle>
   );
}

export default Login;
