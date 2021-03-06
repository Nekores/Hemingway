import { createGlobalStyle } from 'styled-components';
import fontBold from "./fonts/Mostardesign-SofiaProBold.otf"
import fontLight from "./fonts/Mostardesign-SofiaProLight.otf"
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: SofiaPro;
    src: url(${fontLight});
    font-weight: light;
}

@font-face {
   font-family: SofiaPro;
    font-weight: bold;
    src: url(${fontBold}) format("opentype");
}
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0 auto;  
  }

  body {
    font-family: SofiaPro;
  }

  body.fontLoaded {
    font-family: SofiaPro;
  }

  #app {
    width: 100%;
    height: 100%;
  } 

  h1,h2,h3,h4,h5,h6,span,i,p,input,textarea{
     font-family: SofiaPro !important;
  }
 
`;

export default GlobalStyle;
