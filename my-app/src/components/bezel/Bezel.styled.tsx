import styled from "styled-components";
import { COLORS } from "../../const/COLORS";

export const BezelStyled = styled.div`
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 186px;
        height: 186.5px;
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
        top: -2%;
        border-radius: 50%;
`