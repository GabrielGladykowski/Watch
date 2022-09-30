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

// export const GLOBALSTYLE_BACKGROUND = createGlobalStyle`
//     background: ${COLORS.BACKGROUND_ONE_COLOR};
//     background: linear-gradient(200deg, ${COLORS.BACKGROUND_TWO_COLOR} 0%, ${COLORS.BACKGROUND_TWO_COLOR} 100%);
// `