import styled from "styled-components";
import { COLORS } from "../const/COLORS";

export const WatchStyled = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    position: relative;
    background: ${COLORS.BACKGROUND_LIGHT_COLOR};
    background: linear-gradient(190deg, ${COLORS.BACKGROUND_LIGHT_COLOR} 0%, ${COLORS.BACKGROUND_DARK_COLOR} 100%);
    transform: scale(1.4);
`