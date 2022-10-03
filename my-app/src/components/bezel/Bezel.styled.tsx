import styled from "styled-components";
import { COLORS } from "../../const/COLORS";

export const BezelStyled = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 185.6px;
        height: 185.6px;
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
        border-radius: 50%;
`