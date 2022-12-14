import styled from "styled-components";
import { COLORS } from "../../const/COLORS";

export const BezelStyled = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 196.5px;
    height: 196.5px;
    background-image: linear-gradient(
        to top right,
        ${COLORS.BEZEL_DARK_BACKGROUND_COLOR},
        ${COLORS.BEZEL_LIGHT_BACKGROUND_COLOR}
    );
    border-radius: 50%;
    @media (min-width: 375px) {
        transform: scale(1.2);
    }
    @media (min-width: 768px) {
        transform: scale(1.5);
    }
    @media (min-width: 1024px) {
        transform: scale(1.8);
    }
`;

export const BezelGrayCircleStyled = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 169px;
    height: 169px;
    background-image: linear-gradient(
        to top right,
        ${COLORS.BEZEL_DARK_GRAY},
        ${COLORS.BEZEL_LIGHT_GRAY}
    );
    border-radius: 50%;
    border: 1px solid ${COLORS.BEZEL_BORDER_GRAY_CIRCLE};
`;