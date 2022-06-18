import styled from 'styled-components';

import colors from '../../../utils/styles/colors';

const AllParamsStyle = styled.section`
   width: 100%;
   min-height: 78vh;
   padding: 50px 0 50px 0;
   background-color: ${colors.grey_light};
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`;

function Params({ user, setUser, token, setToken }) {
   return <AllParamsStyle>Params</AllParamsStyle>;
}

export default Params;
