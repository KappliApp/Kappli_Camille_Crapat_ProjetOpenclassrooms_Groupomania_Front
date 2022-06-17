import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
   let navigate = useNavigate();

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = localStorage.getItem('token');

      if (user && token) {
         navigate('/user/allposts');
      }
   }, [navigate]);

   return (
      <ConnexionStyle>
         <ConnexionContainerStyle>
            <ConnexionTitleStyle>Connexion</ConnexionTitleStyle>
            <Form />
         </ConnexionContainerStyle>
      </ConnexionStyle>
   );
}

export default Login;
