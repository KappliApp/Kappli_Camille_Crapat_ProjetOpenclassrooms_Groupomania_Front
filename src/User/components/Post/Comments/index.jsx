import styled from 'styled-components';

import colors from '../../../../utils/styles/colors';

import Profiles from '../../Profile';
import DatePost from '../../DatePost';

const CommentsStyle = styled.div`
margin 5px auto 15px auto`;

const CommentContainerStyle = styled.div`
   display: flex;
   margin-top: 10px;
`;

const CommentStyle = styled.div`
   width: 90%;
   padding-left: 8px;
`;

const CommentStyle2 = styled.div`
   min-width: 22%;
   background-color: ${colors.grey_dark};
   border-radius: 15px;
   padding: 7px 9px 10px 9px;
`;

const HeaderCommentStyle = styled.div`
   font-weight: bold;
   font-size: 0.94em;
`;

const BodyCommentStyle = styled.div`
   width: 100%;
   font-size: 0.88em;
   margin-top: 2px;
`;

function Comments({ comments }) {
   return (
      <CommentsStyle>
         {comments.map((el) => (
            <CommentContainerStyle>
               <Profiles />
               <CommentStyle>
                  <CommentStyle2>
                     <HeaderCommentStyle>{`${el.commentFirstName} ${el.commentLastName}`}</HeaderCommentStyle>
                     <BodyCommentStyle>{el.commentText}</BodyCommentStyle>
                  </CommentStyle2>
                  <DatePost date={el.commentDate} />
               </CommentStyle>
            </CommentContainerStyle>
         ))}
      </CommentsStyle>
   );
}

export default Comments;
