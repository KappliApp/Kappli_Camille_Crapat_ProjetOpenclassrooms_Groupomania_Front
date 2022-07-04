import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import colors from '../../../utils/styles/colors';

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
   background-color: ${colors.secondary};
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
      background-color: ${colors.secondary_light};
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

function ParamsDelete({ user, setUser, token, setToken }) {
   const [messageErrorDelete, setMessageErrorDelete] = useState('');
   const [loadingDataDelete, setLoadingDataDelete] = useState(false);

   let navigate = useNavigate();

   const delAccount = (e) => {
      e.preventDefault();

      const userId = {
         user_id: user.user_id,
      };

      async function fetchDel() {
         try {
            setLoadingDataDelete(true);

            const response = await fetch(
               'http://localhost:20110/api/users/delete/' + user.user_id,
               {
                  method: 'PUT',
                  headers: {
                     'Content-Type': 'application/json',
                     'Authorization': 'Bearer ' + token, // prettier-ignore
                  },
                  body: JSON.stringify(userId),
               }
            );

            const responseData = await response.json();

            if (responseData.error) {
               setMessageErrorDelete(responseData.error);
            } else {
               localStorage.clear();
               setUser();
               setToken('');
               navigate('/');
            }
         } catch (err) {
            console.log(err);
         } finally {
            setLoadingDataDelete(false);
         }
      }
      fetchDel();
   };

   return (
      <ParamsStyle>
         <ParamsTitleStyle>Compte</ParamsTitleStyle>
         <ParamsTextStyle>
            Vous pouvez désactiver votre compte. Pour le réactiver, contactez le
            service des Ressources Humaines
         </ParamsTextStyle>
         <ParamsErrorStyle>{messageErrorDelete}</ParamsErrorStyle>
         <ParamsButtonStyle onClick={(e) => delAccount(e)}>
            {loadingDataDelete === false ? (
               'Désactiver mon compte'
            ) : (
               <ConnexionLoadingStyle />
            )}
         </ParamsButtonStyle>
      </ParamsStyle>
   );
}

export default ParamsDelete;
