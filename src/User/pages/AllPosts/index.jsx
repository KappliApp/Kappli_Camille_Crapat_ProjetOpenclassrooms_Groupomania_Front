import styled from 'styled-components';

import colors from '../../../utils/styles/colors';
import posts from '../../posts';

import CreatePost from '../../components/CreatePost';
import Post from '../../components/Post';

const AllPostsStyle = styled.section`
   width: 100%;
   min-height: 78vh;
   padding: 50px 0 50px 0;
   background-color: ${colors.grey_dark};
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`;

function AllPosts() {
   return (
      <AllPostsStyle>
         <CreatePost />
         {posts.map((el) => (
            <Post
               key={el.postId}
               lastName={el.postLastName}
               firstName={el.postFirstName}
               date={el.postDate}
               text={el.postText}
               images={el.postImage}
               likes={el.postLike}
               comments={el.postComments}
            />
         ))}
      </AllPostsStyle>
   );
}

export default AllPosts;
