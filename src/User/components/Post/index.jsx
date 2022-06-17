import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';

import colors from '../../../utils/styles/colors';

import Profiles from '../Profile';
import ImagePost from './ImagePost';
import DatePost from '../DatePost';
import Button from './Button';
import Comments from './Comments';

const PostStyle = styled.div`
   width: 50%;
   border-radius: 20px;
   padding: 20px 20px 3px 20px;
   background-color: ${colors.white};
   margin: 15px auto 15px auto;
`;

const HeaderStyle = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
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

const HeaderOptionStyle = styled.div`
   display: flex;
   justify-content: center;
   width: 5%;
   font-size: 1.5em;
   border-radius: 5px;
   &:hover {
      cursor: pointer;
      background-color: ${colors.grey_light};
   }
`;

const PostBodyTextStyle = styled.p`
   margin: 12px auto 15px auto;
`;

const InfoStyle = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   margin: 12px auto;
`;

const LikeStyle = styled.div`
   display: flex;
   align-items: center;
`;

const LikeBlueStyle = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #1281e7;
   color: ${colors.white};
   font-size: 0.7em;
   width: 20px;
   height: 20px;
   border-radius: 20px;
   margin-right: 4px;
`;

const LineStyle = styled.div`
   margin: auto;
   width: 99%;
   border-top: 1px solid #c3c3c3;
   ${(props) => props.$marge && `margin-top: 3px;`}
`;

function Post({ lastName, firstName, date, text, images, likes, comments }) {
   const myLike = likes.filter((el) => el.userId === 1);
   return (
      <PostStyle>
         <HeaderStyle>
            <Profiles />
            <HeaderTitleStyle>
               <HeaderTitleNameStyle>{`${firstName} ${lastName}`}</HeaderTitleNameStyle>
               <DatePost date={date} />
            </HeaderTitleStyle>
            <HeaderOptionStyle>
               <FontAwesomeIcon icon="ellipsis" />
            </HeaderOptionStyle>
         </HeaderStyle>
         <PostBodyTextStyle>{text}</PostBodyTextStyle>
         {images && images.length > 0 && <ImagePost images={images} />}
         <InfoStyle>
            <LikeStyle>
               <LikeBlueStyle>
                  <FontAwesomeIcon icon="thumbs-up" />
               </LikeBlueStyle>
               {likes ? likes.length : 0}
            </LikeStyle>
            {comments ? comments.length : 0} commentaires
         </InfoStyle>
         <LineStyle />
         <Button myLike={myLike} />
         {comments && comments.length > 0 && (
            <Fragment>
               <LineStyle $marge /> <Comments comments={comments} />
            </Fragment>
         )}
      </PostStyle>
   );
}

export default Post;
