import photo from '../assets/img/Image_created_with_a_mobile_phone.png';
import photo2 from '../assets/img/image.jpg';

const posts = [
   {
      postId: 1,
      postLastName: 'CRAPAT',
      postFirstName: 'Camille',
      postDate: new Date('2022-04-15T17:39:00'),
      postText: `Coucou les lapinous 🐇 
      Aujourd’hui et jusqu’à dimanche 20h, je vous propose de voter pour le plus beau dessin 🗳
      Ces dessins ont été réalisé ce week-end par les enfants lorsqu’ils sont venus profiter des activités pendant les portes ouvertes 🖼
      Je vous propose donc à vous de voter afin d’élire un ou une grand(e) gagnant(e) 👑
      Le dessin qui aura le plus de 👍ou de ❤️ fera remporter à son créateur un magnifique sac rempli de cadeaux 💝
      Alors tous à vos votes 😉
      Locky`,
      postImage: [
         {
            imageId: 1,
            imageUrl: photo,
            imageAlt: "Image de l'article n°1",
         },
         {
            imageId: 2,
            imageUrl: photo2,
            imageAlt: "Image de l'article n°1",
         },
         {
            imageId: 3,
            imageUrl: photo,
            imageAlt: "Image de l'article n°1",
         },
         {
            imageId: 4,
            imageUrl: photo,
            imageAlt: "Image de l'article n°1",
         },
      ],
      postLike: [
         {
            likeId: 1,
            userId: 1,
         },
         {
            likeId: 2,
         },
      ],
      postComments: [
         {
            commentId: 1,
            commentLastName: 'CRAPAT',
            commentFirstName: 'Camille',
            commentDate: new Date('2022-04-16T12:12:00'),
            commentText: 'Caca',
         },
         {
            commentId: 2,
            commentLastName: 'CRAPAT',
            commentFirstName: 'Camille',
            commentDate: new Date('2022-04-16T12:12:00'),
            commentText: 'Caca2',
         },
      ],
   },
   {
      postId: 2,
      postLastName: 'BROWN',
      postFirstName: 'Yvette',
      postDate: new Date('2022-03-19T03:24:00'),
      postText: 'Et bien moi je suis là tralala !',
      postImage: [],
      postLike: [
         {
            likeId: 3,
         },
         {
            likeId: 4,
         },
         {
            likeId: 5,
            userId: 1,
         },
      ],
   },
   {
      postId: 3,
      postLastName: 'RENAULT',
      postFirstName: 'Emeline',
      postDate: new Date('2019-11-17T03:24:00'),
      postText: 'Blabla !',
      postImage: [
         {
            imageId: 6,
            imageUrl: photo,
            imageAlt: "Image de l'article n°1",
         },
         {
            imageId: 7,
            imageUrl: photo2,
            imageAlt: "Image de l'article n°1",
         },
      ],
      postLike: [
         {
            likeId: 6,
            userId: 2,
         },
      ],
      postComments: [
         {
            commentId: 3,
            commentLastName: 'CRAPAT',
            commentFirstName: 'Camille',
            commentDate: new Date('2022-04-16T12:12:00'),
            commentText: 'Caca',
         },
         {
            commentId: 4,
            commentLastName: 'CRAPAT',
            commentFirstName: 'Camille',
            commentDate: new Date('2022-04-16T12:12:00'),
            commentText: 'Cacadede2',
         },
      ],
   },
];

export default posts;
