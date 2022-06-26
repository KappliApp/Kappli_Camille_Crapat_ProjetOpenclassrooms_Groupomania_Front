import styled from 'styled-components';

import colors from '../../../utils/styles/colors';

import ParamsIdentity from '../../components/ParamsIdentity';
import ParamsSecurity from '../../components/ParamsSecurity';
import ParamsDelete from '../../components/ParamsDelete';

const AllParamsStyle = styled.section`
   width: 100%;
   min-height: 78vh;
   padding: 50px 0 50px 0;
   background-color: ${colors.grey_light};
   display: flex;
   flex-direction: column;
   align-items: center;
`;

function Params({ user, setUser, token, setToken }) {
   return (
      <AllParamsStyle>
         <ParamsIdentity
            user={user}
            setUser={setUser}
            token={token}
            setToken={setToken}
         />
         <ParamsSecurity
            user={user}
            setUser={setUser}
            token={token}
            setToken={setToken}
         />
         <ParamsDelete
            user={user}
            setUser={setUser}
            token={token}
            setToken={setToken}
         />
      </AllParamsStyle>
   );
}

export default Params;
