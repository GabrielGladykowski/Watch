import styled from "styled-components";
import { COLORS } from "../../const/COLORS";

export const CaseWrapperStyled = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 230px;
`

export const CaseStyled = styled.div`
    display: flex;
    position: absolute;
    height: 230px;
    width: 45px;
    border-radius: 50% 0 0 50%;
    background: linear-gradient(
            0deg, 
            ${COLORS.CASE_LIGHT_COLOR} 0%, 
            ${COLORS.CASE_DARK_COLOR} 8%, 
            ${COLORS.CASE_LIGHT_COLOR} 35%, 
            ${COLORS.CASE_LIGHT_COLOR} 70%, 
            ${COLORS.CASE_DARK_COLOR} 90%, 
            ${COLORS.CASE_LIGHT_COLOR} 100%
        );
    left: 0;
    top: 0;
    &::before {
        content: "";
        position: absolute;
        height: 230px;
        width: 45px;
        right: -155px;
        top: 0;
        border-radius: 50% 0 0 50%;
        background: linear-gradient(
            0deg, 
            ${COLORS.CASE_LIGHT_COLOR} 0%, 
            ${COLORS.CASE_DARK_COLOR} 8%, 
            ${COLORS.CASE_LIGHT_COLOR} 35%, 
            ${COLORS.CASE_LIGHT_COLOR} 70%, 
            ${COLORS.CASE_DARK_COLOR} 90%, 
            ${COLORS.CASE_LIGHT_COLOR} 100%
        );
        transform: rotate(180deg);
    }
` 