import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import colors from '../../../utils/styles/colors';

const ConnexionInputContainerStyle = styled.div`
   width: 82%;
   height: 55px;
   border-radius: 7px;
   margin-bottom: 35px;
`;

const ConnexionErrorStyle = styled.div`
   position: relative;
   top: -40px;
   left: 92%;
   color: ${colors.error};
   font-size: 20px;
`;

const ConnexionOkStyle = styled.div`
   position: relative;
   top: -40px;
   left: 92%;
   color: ${colors.ok};
   font-size: 20px;
`;

const ConnexionInputStyle = styled.input`
   width: 100%;
   height: 55px;
   border-radius: 7px;
   border: 1px solid ${colors.grey_dark};
   padding-left: 15px;
   font-size: 18px;
   ${(res) => res.res === 'error' && `border: 1px solid ${colors.error}`}
   ${(res) => res.res === 'ok' && `border: 1px solid ${colors.ok}`}
`;

function Input({
   type,
   name,
   placeholder,
   value,
   setValue,
   error,
   setError,
   setMessageError,
}) {
   const verif = (input, type) => {
      const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //eslint-disable-line
      if (type === 'email') {
         if (!input || input === '') {
            setMessageError('Vous devez saisir une adresse e-mail !');
            setError(true);
         } else if (!regexMail.test(input)) {
            setMessageError('Votre adresse e-mail contient une erreur !');
            setError(true);
         } else {
            setMessageError('');
            setError(false);
         }
      } else if (type === 'password') {
         if (!input || input === '') {
            setMessageError('Vous devez saisir votre mot de passe !');
            setError(true);
         } else {
            setMessageError('');
            setError(false);
         }
      }
   };

   return (
      <ConnexionInputContainerStyle>
         <ConnexionInputStyle
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            res={(error === true && 'error') || (error === false && 'ok')}
            onChange={(e) => {
               verif(e.target.value, type);
               setValue(e.target.value);
            }}
         />
         {error === true && (
            <ConnexionErrorStyle>
               <FontAwesomeIcon icon={['fas', 'circle-exclamation']} />
            </ConnexionErrorStyle>
         )}
         {error === false && (
            <ConnexionOkStyle>
               <FontAwesomeIcon icon={['fas', 'circle-check']} />
            </ConnexionOkStyle>
         )}
      </ConnexionInputContainerStyle>
   );
}

export default Input;
