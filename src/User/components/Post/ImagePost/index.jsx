import styled from 'styled-components';

const ContainerStyle = styled.div`
   width: 100%;
   height: 450px;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-content: space-around;
   flex-wrap: wrap;
   overflow: hidden;
`;
const ImagesContainer = styled.div`
   width: 100%;
   height: 450px;
   ${(props) =>
      props.$2
         ? `width: 49.6%; height: 450px;`
         : props.$3 && `width: 49.6%; height: 222px;`}
`;
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`;

function ImagePost({ images }) {
   return (
      <ContainerStyle>
         {images.map((el) =>
            images.length > 1 && images.length < 3 ? (
               <ImagesContainer $2 key={el.imageId}>
                  <Image
                     key={`image-${el.imageId}`}
                     src={el.imageUrl}
                     alt={el.imageAlt}
                  />
               </ImagesContainer>
            ) : images.length >= 3 ? (
               <ImagesContainer $3 key={el.imageId}>
                  <Image
                     key={`image-${el.imageId}`}
                     src={el.imageUrl}
                     alt={el.imageAlt}
                  />
               </ImagesContainer>
            ) : (
               <ImagesContainer key={el.imageId}>
                  <Image
                     key={`image-${el.imageId}`}
                     src={el.imageUrl}
                     alt={el.imageAlt}
                  />
               </ImagesContainer>
            )
         )}
      </ContainerStyle>
   );
}

export default ImagePost;
