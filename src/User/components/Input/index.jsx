import { Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import colors from '../../../utils/styles/colors';

const ConnexionErrorStyle = styled.div`
   position: relative;
   top: -55px;
   left: +28%;
   color: ${colors.error};
   font-size: 20px;
`;

const ConnexionOkStyle = styled.div`
   position: relative;
   top: -55px;
   left: +28%;
   color: ${colors.ok};
   font-size: 20px;
`;

const ConnexionInputStyle = styled.input`
   width: 65%;
   height: 55px;
   border-radius: 7px;
   border: 1px solid ${colors.grey_dark};
   padding-left: 15px;
   font-size: 18px;
   margin-bottom: 15px;
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
   return (
      <Fragment>
         <ConnexionInputStyle
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            res={(error === true && 'error') || (error === false && 'ok')}
            onChange={(e) => {
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
      </Fragment>
   );
}

export default Input;
