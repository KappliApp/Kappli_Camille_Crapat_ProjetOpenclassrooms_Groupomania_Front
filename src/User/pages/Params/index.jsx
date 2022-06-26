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
   margin-bottom: 25px;
   text-align: center;
`;

const ParamsInputSecurityStyle = styled.input`
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

const ParamsButtonStyle = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 65%;
   height: 55px;
   border-radius: 7px;
   border: 0;
   font-weight: bold;
   font-size: 18px;
   color: ${colors.white};
   cursor: pointer;
   ${(props) =>
      props.$isdelete &&
      `background-color: ${colors.secondary}; &:hover {background-color: ${colors.secondary_light};}`}
   ${(props) =>
      props.$isok &&
      `background-color: ${colors.primary}; &:hover {background-color: ${colors.primary_light};}`}
`;

function Params({ user, setUser, token, setToken }) {
   return (
      <AllParamsStyle>
         <ParamsStyle>
            <ParamsTitleStyle>Identité</ParamsTitleStyle>
         </ParamsStyle>
         <ParamsStyle>
            <ParamsTitleStyle>Sécurité</ParamsTitleStyle>
            <ParamsTextStyle>
               Vous pouvez modifier votre mot de passe. Il doit contenir au
               moins 8 caractères, dont au minimum 1 majuscule, 1 minuscule, 1
               chiffre et 1 caractère spécial
            </ParamsTextStyle>
            <ParamsInputSecurityStyle
               type="password"
               name="password"
               placeholder="Votre ancien mot de passe"
            />
            <ParamsInputSecurityStyle
               type="password"
               name="password"
               placeholder="Votre nouveau mot de passe"
            />
            <ParamsInputSecurityStyle
               type="password"
               name="password"
               placeholder="Confirmez votre nouveau mot de passe"
            />
            <ParamsButtonStyle $isok>
               Modifier mon mot de passe
            </ParamsButtonStyle>
         </ParamsStyle>
         <ParamsStyle>
            <ParamsTitleStyle>Compte</ParamsTitleStyle>
            <ParamsTextStyle>
               Vous pouvez désactiver votre compte. Pour le réactiver, contactez
               le service des Ressources Humaines
            </ParamsTextStyle>
            <ParamsButtonStyle $isdelete>
               Désactiver mon compte
            </ParamsButtonStyle>
         </ParamsStyle>
      </AllParamsStyle>
   );
}

export default Params;
