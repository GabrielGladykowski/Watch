import styled from "styled-components";
import { COLORS } from "../../../const/COLORS";

export const HandsWrapperSecond = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 3;
`;

export const HandsAllSecondStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 25px;
`;

export const HandsHalfLeftSecondStyled = styled.div`
    position: absolute;
    height: 96px;
    width: 1.5px;
    border-top: 96px solid ${COLORS.HANDS_COLOR_DARK};
    border-left: 1px solid transparent;
    right: 0;
    box-shadow: 2px .2px 2px black;
`;

export const HandsHalfRightSecondStyled = styled.div`
    position: absolute;
    height: 96px;
    width: 1.5px;
    border-top: 96px solid ${COLORS.HANDS_COLOR_LIGHT};
    border-right: 1px solid transparent;
    left: 0;
`;

export const CircleCenterHandsSecondStyled = styled.div`
    position: absolute;
    height: 8px;
    width: 8px;
    background-color: ${COLORS.CIRCLE_COLOR};
    border-radius: 50px;
    border-left: 1.2px solid ${COLORS.HANDS_COLOR_DARK};
    border-right: 1.2px solid ${COLORS.HANDS_COLOR_LIGHT};
    border-top: 1.2px solid ${COLORS.HANDS_COLOR_LIGHT};
    border-bottom: 1.2px solid ${COLORS.HANDS_COLOR_DARK};
    transform: rotate(45deg);
`;

// -------------------------------------------------------------------------------------

export const HandsWrapperMinute = styled(HandsWrapperSecond)`
    z-index: 2;
    transform: rotate(-115deg);
`;

export const HandsAllMinuteStyled = styled(HandsAllSecondStyled)`
    top: 28px;
`;

export const HandsHalfLeftMinuteStyled = styled.div`
    position: absolute;
    height: 83px;
    width: 3.5px;
    border-top: 83px solid ${COLORS.HANDS_COLOR_DARK};
    border-left: 1px solid transparent;
    right: 0;
    box-shadow: 2.6px .3px 2px black;
`;

export const HandsHalfRightMinuteStyled = styled.div`
    position: absolute;
    height: 83px;
    width: 3.5px;
    border-top: 83px solid ${COLORS.HANDS_COLOR_LIGHT};
    border-right: 1px solid transparent;
    left: 0;
`;

export const HandsCenterMinuteStyled = styled.div`
    position: absolute;
    height: 40px;
    width: 3px;
    background-color: ${COLORS.HOURS_INSIDE_COLOR};
    box-shadow: inset .2px .2px 1.2px;
    top: 25px;
`;

export const CircleCenterHandsMinuteStyled = styled(CircleCenterHandsSecondStyled)`
    height: 10px;
    width: 10px;
    border-left: 5px solid ${COLORS.HANDS_COLOR_DARK};
    border-right: 5px solid ${COLORS.HANDS_COLOR_LIGHT};
    border-top: 5px solid ${COLORS.HANDS_COLOR_LIGHT};
    border-bottom: 5px solid ${COLORS.HANDS_COLOR_DARK};
`;

// ------------------------------------------------------------------------------------------

export const HandsWrapperHour = styled(HandsWrapperSecond)`
    z-index: 1;
    transform: rotate(125deg);
`;

export const HandsAllHourStyled = styled(HandsAllMinuteStyled)`
    top: 15px;
`;

export const HandsHalfLeftHourStyled = styled.div`
    position: absolute;
    height: 57px;
    width: 4px;
    border-top: 57px solid ${COLORS.HANDS_COLOR_DARK};
    border-left: 1px solid transparent;
    right: 0;
    box-shadow: 3.4px .3px 2px black;
`;

export const HandsHalfRightHourStyled = styled.div`
    position: absolute;
    height: 57px;
    width: 4px;
    border-top: 57px solid ${COLORS.HANDS_COLOR_LIGHT};
    border-right: 1px solid transparent;
    left: 0;
`;

export const HandsCenterHourStyled = styled.div`
    position: absolute;
    height: 20px;
    width: 3px;
    background-color: ${COLORS.HOURS_INSIDE_COLOR};
    box-shadow: inset .2px .2px 1.2px;
    top: 19px;
`;

export const CircleCenterHandsHourStyled = styled(CircleCenterHandsMinuteStyled)`
    height: 11px;
    width: 11px;
`;