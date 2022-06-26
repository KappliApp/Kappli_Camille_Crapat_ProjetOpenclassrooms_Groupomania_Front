import styled from 'styled-components';

import colors from '../../../utils/styles/colors';

const AllParamsStyle = styled.section`
   width: 100%;
   min-height: 78vh;
   padding: 50px 0 50px 0;
   background-color: ${colors.grey_light};
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const ParamsStyle = styled.div`
   width: 50%;
   border-radius: 20px;
   padding: 20px 20px 3px 20px;
   background-color: ${colors.white};
   margin: 15px auto 15px auto;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const ParamsTitleStyle = styled.h2`
   font-size: 24px;
   margin-bottom: 55px;
`;

const ParamsTextStyle = styled.p``;

const ParamsButtonDelStyle = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${colors.secondary};
   width: 50%;
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

function Params({ user, setUser, token, setToken }) {
   return (
      <AllParamsStyle>
         <ParamsStyle>
            <ParamsTitleStyle>Identité</ParamsTitleStyle>
         </ParamsStyle>
         <ParamsStyle>
            <ParamsTitleStyle>Sécurité</ParamsTitleStyle>
         </ParamsStyle>
         <ParamsStyle>
            <ParamsTitleStyle>Compte</ParamsTitleStyle>
            <ParamsTextStyle>
               Vous pouvez désactiver votre compte. Pour le réactiver, contactez
               le service des Ressources Humaines
            </ParamsTextStyle>
            <ParamsButtonDelStyle>Désactiver mon compte</ParamsButtonDelStyle>
         </ParamsStyle>
      </AllParamsStyle>
   );
}

export default Params;
