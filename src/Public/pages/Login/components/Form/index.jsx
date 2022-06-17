import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

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
   display: flex;
   justify-content: center;
   align-items: center;
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

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
    transform: rotate(360deg);
    }
`;

const ConnexionLoadingStyle = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 30px;
   padding: 7px;
   border: 3px solid ${colors.white};
   border-bottom-color: transparent;
   animation: ${rotate} 1s infinite linear;
`;

function Form() {
   const [mail, setMail] = useState('');
   const [errorMail, setErrorMail] = useState();
   const [errorPassword, setErrorPassword] = useState();
   const [password, setPassword] = useState('');
   const [messageError, setMessageError] = useState('');
   const [dataLoading, setDataLoading] = useState(false);

   let navigate = useNavigate();

   const verif = () => {
      const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (mail === '' || !mail) {
         setMessageError('Vous devez saisir une adresse e-mail !');
         setErrorMail(true);
      } else if (!regexMail.test(mail)) {
         setMessageError('Votre adresse e-mail contient une erreur !');
         setErrorMail(true);
      } else if (password === '' || !password) {
         setMessageError('Vous devez saisir votre mot de passe !');
         setErrorPassword(true);
      } else {
         setMessageError('');
         setErrorMail(false);
         setErrorPassword(false);
      }
   };

   const send = (e) => {
      e.preventDefault();
      if (errorMail === false && errorPassword === false) {
         async function fetchUser() {
            try {
               setDataLoading(true);
               const response = await fetch(
                  'http://localhost:20110/api/users/login',
                  {
                     method: 'POST',
                     headers: {
                        'Content-Type': 'application/json',
                     },
                     body: JSON.stringify({ mail: mail, password: password }),
                  }
               );
               const userData = await response.json();

               if (userData.error) {
                  if (userData !== 'Votre compte a été bloqué !') {
                     setErrorMail(true);
                     setErrorPassword(true);
                  }
                  setMessageError(userData.error);
               } else {
                  localStorage.setItem('user', JSON.stringify(userData.user));
                  localStorage.setItem('token', userData.token);
                  navigate('/user/allposts');
               }
            } catch (err) {
               console.log(err);
            } finally {
               setDataLoading(false);
            }
         }
         fetchUser();
      }
   };

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
            setMessageError={setMessageError}
         />
         <Input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={password}
            setValue={setPassword}
            error={errorPassword}
            setError={setErrorPassword}
            setMessageError={setMessageError}
         />
         <ConnexionErrorStyle>{messageError}</ConnexionErrorStyle>
         <ConnexionButtonStyle
            onClick={(e) => {
               verif();
               send(e);
            }}
         >
            {dataLoading === false ? 'Connexion' : <ConnexionLoadingStyle />}
         </ConnexionButtonStyle>
      </ConnexionFormStyle>
   );
}

export default Form;
