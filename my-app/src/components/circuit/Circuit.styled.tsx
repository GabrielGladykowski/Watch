import styled from "styled-components";
import { COLORS } from "../../const/COLORS";

export const CircuitStyled = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 25vh;
    background-color: ${COLORS.WHITE_COLOR};
    border-radius: 50%;
    &::before {
        position: absolute;
        content: "";
        width: 58vw;
        height: 29vh;
        background-image: -webkit-linear-gradient(
            to top right,
            ${COLORS.BEZEL_ONE_BACKGROUND_COLOR},
            ${COLORS.BEZEL_TWO_BACKGROUND_COLOR}
        );
        background-image: linear-gradient(
            to top right,
            ${COLORS.BEZEL_ONE_BACKGROUND_COLOR},
            ${COLORS.BEZEL_TWO_BACKGROUND_COLOR}
        );
        top: -8%;
        left: -7.5%;
        z-index: -100;
        border-radius: 50%;
    }
`