import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../const/COLORS';

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
    }
`;

export default GLOBALSTYLE;