import styled from "styled-components";
import { COLORS } from "../../const/COLORS";

export const CaseWrapperStyled = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 230px;
`;

export const CaseStyledTopLeft = styled.div`
    display: flex;
    position: absolute;
    height: 115px;
    border-right: 15px solid ${COLORS.CASE_COLOR};
    border-top: 5px solid transparent;
    left: 28.5px;
    top: 0;
    &::before {
        content: "";
        position: absolute;
        height: 115px;
        right: -.5px;
        top: -.5px;
        border-right: 28px solid ${COLORS.CASE_COLOR};
        border-top: 90px solid transparent;
    }
`;

export const CaseStyledBottomLeft = styled(CaseStyledTopLeft)`
    top: 115px;
    border-top: none;
    border-bottom: 5px solid transparent;
    &::before {
        border-top: none;
        border-bottom: 90px solid transparent;
        top: -4.5px;
    }
`;

export const CaseStyledBottomRight = styled(CaseStyledTopLeft)`
    left: 156.5px;
    rotate: 180deg;
    top: 115px;
`;

export const CaseStyledTopRight = styled(CaseStyledBottomLeft)`
    left: 156.5px;
    rotate: 180deg;
    top: 0;
`;