import { useState } from 'react';
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
   const [mail, setMail] = useState('');
   const [errorMail, setErrorMail] = useState();
   const [errorPassword, setErrorPassword] = useState();
   const [password, setPassword] = useState('');
   const [messageError, setMessageError] = useState('');
   const [user, setUser] = useState();

   function send(e) {
      e.preventDefault();
      const regexMail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
      if (!mail || mail === '') {
         setMessageError("Vous n'avez pas saisi votre adresse e-mail !");
         setErrorMail(true);
      } else if (!regexMail.test(mail)) {
         setMessageError('Votre adresse e-mail contient une erreur !');
         setErrorMail(true);
      } else if (!password || password === '') {
         setMessageError("Vous n'avez pas saisi votre mot de passe !");
         setErrorPassword(true);
      } else {
         setMessageError('');
         setErrorMail(false);
         setErrorPassword(false);
         fetch('http://localhost:20110/api/users/login', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               mail: mail,
               password: password,
            }),
         })
            .then(function (res) {
               return res.json();
            })
            .then(function (data) {
               if (data.error) {
                  setMessageError(data.error);
                  if (data.error !== 'Votre compte a été bloqué !') {
                     setErrorMail(true);
                     setErrorPassword(true);
                  }
               } else {
                  setUser(data);
                  localStorage.setItem('token', user.token);
                  localStorage.setItem('user', JSON.stringify(user.user));
               }
            })
            .catch(function (err) {
               setMessageError(
                  'Une erreur est survenu lors de la connexion au serveur !'
               );
            });
      }
   }
   return (
      <ConnexionStyle>
         <ConnexionContainerStyle>
            <ConnexionTitleStyle>Connexion</ConnexionTitleStyle>
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
               <ConnexionButtonStyle onClick={(e) => send(e)}>
                  Connexion
               </ConnexionButtonStyle>
            </ConnexionFormStyle>
         </ConnexionContainerStyle>
      </ConnexionStyle>
   );
}

export default Login;
