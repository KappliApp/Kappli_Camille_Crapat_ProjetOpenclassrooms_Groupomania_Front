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

function ParamsIdentity({ user, setUser, token, setToken }) {
   const [lastName, setLastName] = useState(user.user_lastName);
   const [errorLastName, setErrorLastName] = useState();
   const [firstName, setFirstName] = useState(user.user_firstName);
   const [errorFirstName, setErrorFirstName] = useState();
   const [messageErrorIdentity, setMessageErrorIdentity] = useState('');
   const [loadingDataIdentity, setLoadingDataIdentity] = useState(false);

   return (
      <ParamsStyle>
         <ParamsTitleStyle>Identité</ParamsTitleStyle>
         <Input
            type="text"
            name="lastName"
            value={lastName}
            setValue={setLastName}
            error={errorLastName}
            setError={setErrorLastName}
            setMessageError={setMessageErrorIdentity}
         />
         <Input
            type="text"
            name="firstName"
            value={firstName}
            setValue={setFirstName}
            error={errorFirstName}
            setError={setErrorFirstName}
            setMessageError={setMessageErrorIdentity}
         />
         <ParamsErrorStyle>{messageErrorIdentity}</ParamsErrorStyle>
         <ParamsButtonStyle>Modifier mon identité</ParamsButtonStyle>
      </ParamsStyle>
   );
}

export default ParamsIdentity;
