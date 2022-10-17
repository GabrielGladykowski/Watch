import styled from "styled-components";
import { COLORS } from "../../../const/COLORS";

export const DateWindowWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 20px;
    background-color: ${COLORS.HOURS_AND_DATE_INSIDE_COLOR};
    position: absolute;
    right: 10px;
    box-shadow: inset 1px 2.5px 4px;
`;

export const DateWindowFrameTopBottomStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 3.5px;
    width: 30px;
    border-top: 3.5px solid ${COLORS.DATE_WINDOW_FRAME_TOP_AND_BOTTOM};
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    top: 0;
    &::before {
        content: "";
        position: absolute;
        height: 3.5px;
        width: 30px;
        border-bottom: 3.5px solid ${COLORS.DATE_WINDOW_FRAME_TOP_AND_BOTTOM};
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;
        top: 13.1px;
    }
`;

export const DateWindowFrameRightLeftStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 20px;
    width: 3.5px;
    border-left: 3.5px solid ${COLORS.DATE_WINDOW_FRAME_RIGHT_AND_LEFT};
    border-top: 3.5px solid transparent;
    border-bottom: 3.5px solid transparent;
    left: 0;
    &::before {
        content: "";
        position: absolute;
        height: 20px;
        width: 3.5px;
        border-right: 3.5px solid ${COLORS.DATE_WINDOW_FRAME_RIGHT_AND_LEFT};
        border-top: 3.5px solid transparent;
        border-bottom: 3.5px solid transparent;
        left: 23px;
    }
`;