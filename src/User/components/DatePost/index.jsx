import styled from 'styled-components';

const TimeStyle = styled.p`
   color: #686868;
   fon-weigth: bold;
   font-size: 0.8em;
`;

function DatePost({ date }) {
   function formatDate(date) {
      const dateNow = Date.now();
      var dateDiff = dateNow - date;
      var dateFinal = '';

      if (dateDiff < 60000) {
         dateFinal = "A l'instant";
      } else {
         if (dateDiff >= 60000 && dateDiff < 120000) {
            dateFinal = `Il y a ${parseInt(dateDiff / 1000 / 60)} minute`;
         } else if (dateDiff >= 120000 && dateDiff < 3600000) {
            dateFinal = `Il y a ${parseInt(dateDiff / 1000 / 60)} minutes`;
         } else if (dateDiff >= 3600000 && dateDiff < 7200000) {
            dateFinal = `Il y a ${parseInt(dateDiff / 1000 / 60 / 60)} heure`;
         } else if (dateDiff >= 7200000 && dateDiff < 86400000) {
            dateFinal = `Il y a ${parseInt(dateDiff / 1000 / 60 / 60)} heures`;
         } else if (dateDiff >= 86400000 && dateDiff < 172800000) {
            dateFinal = `Il y a ${parseInt(
               dateDiff / 1000 / 60 / 60 / 24
            )} jour`;
         } else if (dateDiff >= 172800000 && dateDiff < 2592000000) {
            dateFinal = `Il y a ${parseInt(
               dateDiff / 1000 / 60 / 60 / 24
            )} jours`;
         } else if (dateDiff >= 2592000000 && dateDiff < 31540000000) {
            dateFinal = `Il y a ${parseInt(
               dateDiff / 1000 / 60 / 60 / 24 / 30
            )} mois`;
         } else if (dateDiff >= 31540000000 && dateDiff < 63070000000) {
            dateFinal = `Il y a ${parseInt(
               dateDiff / 1000 / 60 / 60 / 24 / 30 / 12
            )} an`;
         } else if (dateDiff >= 63070000000) {
            dateFinal = `Il y a ${parseInt(
               dateDiff / 1000 / 60 / 60 / 24 / 30 / 12
            )} ans`;
         }
      }

      return dateFinal;
   }

   return <TimeStyle>{formatDate(date)}</TimeStyle>;
}

export default DatePost;
