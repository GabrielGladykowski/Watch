import styled from "styled-components";
import { COLORS } from "../../const/COLORS";

export const BezelStyled = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 25vh;
    background: ${COLORS.DIAL_LIGHT_COLOR};
background: linear-gradient(180deg, ${COLORS.DIAL_DARK_COLOR} 0%, ${COLORS.DIAL_LIGHT_COLOR} 50%, ${COLORS.DIAL_DARK_COLOR} 100%);
    border-radius: 50%;
    &::before {
        position: absolute;
        content: "";
        width: 58vw;
        height: 29vh;
        background-image: -webkit-linear-gradient(
            to top right,
            ${COLORS.BEZEL_LIGHT_BACKGROUND_COLOR},
            ${COLORS.BEZEL_DARK_BACKGROUND_COLOR}
        );
        background-image: linear-gradient(
            to top right,
            ${COLORS.BEZEL_LIGHT_BACKGROUND_COLOR},
            ${COLORS.BEZEL_DARK_BACKGROUND_COLOR}
        );
        top: -8%;
        left: -7.5%;
        z-index: -100;
        border-radius: 50%;
    }
`