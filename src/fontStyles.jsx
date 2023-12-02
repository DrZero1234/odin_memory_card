import HennyPenny from "./fonts/HennyPenny.woff";
import HennyPennyWoff2 from "./fonts/HennyPenny.woff2";

import GriffyWoff from "./fonts/Griffy.woff";
import GriffyWoff2 from "./fonts/Griffy.woff2";

import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Henny Penny";
    src: url(${HennyPenny}) format ("woff"),
         url(${HennyPennyWoff2}) format(woff2);
  };
  @font-face {
    font-family: "Griffy";
        src: url(${GriffyWoff}) format ("woff"),
              url(${GriffyWoff2}) format(woff2);
  }
`;

export default FontStyles;
