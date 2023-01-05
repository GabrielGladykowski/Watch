import { createGlobalStyle } from "styled-components";
import { COLORS } from "../const/COLORS";

const GLOBALSTYLE = createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    html {
        overflow-x: hidden;
    }

    body {
        font-family: monospace;
        background: linear-gradient(
        190deg,
        ${COLORS.BACKGROUND_LIGHT_COLOR} 0%,
        ${COLORS.BACKGROUND_DARK_COLOR} 100%
    );
    }
`;

export default GLOBALSTYLE;
