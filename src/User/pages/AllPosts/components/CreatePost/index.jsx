import styled from 'styled-components';

import colors from '../../../../../utils/styles/colors';

import Profiles from '../../../../components/Profile';

const CreatePostStyle = styled.div`
   width: 50%;
   border-radius: 20px;
   padding: 20px 20px 3px 20px;
   background-color: ${colors.white};
   margin: 15px auto 15px auto;
`;

const HeaderStyle = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
`;

const HeaderTitleStyle = styled.div`
   padding-left: 8px;
   width: 88%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
`;

const HeaderTitleNameStyle = styled.p`
   font-weight: bold;
`;

const HeaderTitleFunctionStyle = styled.div`
   font-size: 0.85em;
   color: #686868;
`;

const BodyStyle = styled.textarea`
   width: 100%;
   heigth: 100px;
`;

function CreatePost() {
   return (
      <CreatePostStyle>
         <HeaderStyle>
            <Profiles />
            <HeaderTitleStyle>
               <HeaderTitleNameStyle>Camille CRAPAT</HeaderTitleNameStyle>
               <HeaderTitleFunctionStyle>Directrice</HeaderTitleFunctionStyle>
            </HeaderTitleStyle>
         </HeaderStyle>
         <BodyStyle>Caca</BodyStyle>
      </CreatePostStyle>
   );
}

export default CreatePost;
