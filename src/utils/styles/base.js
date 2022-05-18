import { createGlobalStyle } from 'styled-components';

import SourceSansProRegular from '../../assets/font/SourceSansPro-Regular.ttf';
import SourceSansProItalic from '../../assets/font/SourceSansPro-Italic.ttf';
import SourceSansProBold from '../../assets/font/SourceSansPro-Bold.ttf';
import SourceSansProBoldItalic from '../../assets/font/SourceSansPro-BoldItalic.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
   font-family: "Source Sans Pro";
   src: url(${SourceSansProRegular});
   font-weight: normal;
}
@font-face {
   font-family: "Source Sans Pro";
   src: url(${SourceSansProItalic});
   font-weight: normal;
   font-style: italic;
}
@font-face {
   font-family: "Source Sans Pro";
   src: url(${SourceSansProBold});
   font-weight: bold;
}
@font-face {
   font-family: "Source Sans Pro";
   src: url(${SourceSansProBoldItalic});
   font-weight: bold;
   font-style: italic;
}
*{
   font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;
   box-sizing: border-box;
   padding: 0;
   margin: 0;
}
`;

export default GlobalStyle;
