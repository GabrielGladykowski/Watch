import styled from "styled-components";
import { COLORS } from "../../const/COLORS";


export const DialStyled = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 160px;
    background: ${COLORS.DIAL_LIGHT_COLOR};
    background: linear-gradient(180deg, ${COLORS.DIAL_DARK_COLOR} 0%, ${COLORS.DIAL_LIGHT_COLOR} 50%, ${COLORS.DIAL_DARK_COLOR} 100%);
    border-radius: 50%;
`