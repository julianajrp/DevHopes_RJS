import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root{
    /*colors*/

    --purpleBright:#d051dd;
    --purpleBrightFocus:#ff00a6;
    --purpleDull:#7b4093;

    /*background*/
    --bcgBlue: #212940;
    --bcgBlack: #1d1d29;
    /*letter*/
    --letterColorNormal: #F8F9FA;
    --letterColorWhite: #fff;

}
body{
    background-color: var(--bcgBlack);
    color: var(--letterColorNormal);
}
`;
export default GlobalStyle;
