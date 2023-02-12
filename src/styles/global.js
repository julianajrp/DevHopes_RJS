import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root{
    /*colors*/

    /*--colorPrimary: #FF577F;
    --colorPrimaryFocus: #FF427F;
    --colorPrimaryNegative: #59323f;
    --transitionColor: linear-gradient(91deg, #ff01a5d4, #4b00ffd4);
    --pinkTrans: rgb(255, 1, 166);
    --pinkTrans-focus: #ff01a5d4;
    --blueTrans: rgba(75, 0, 255, 0.831); */
    --purpleBright:#d051dd;
    --transitionPurple: linear-gradient(91deg, #c750f3, #df4dd2);
    --purpleDull:#7b4093;

    /* gray scale pallet*/
    
    --grey0: #f8f9fa;
    --grey1: #868e96;
    --grey2: #343b41;
    --grey3: #212529;
    --grey4: #121214;
    
    /*feedback pallet*/
    --negative: #e83f5b;
    --sucess: #3fe864;
    
    /*background*/
    --bcgBlue: #212940;
    --bcgBlack: #1d1d29;
    /*
    --bcgFormColor: #212529;
    --bcgModalBack: rgba(18, 18, 20, 0.5);
    --bcgInputColor: #343B41;
    */
    --letterColorNormal: #F8F9FA;
    --letterColorWhite: #fff;

}
body{
    background-color: var(--bcgBlack);
    color: var(--letterColorNormal);
}
`;
export default GlobalStyle;
