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
    box-shadow: inset 0 0 2px;
`

export const DialHeaderStyled = styled.div`
    position: absolute;
    height: 10px;
    width: 40px;
    font-size: 8px;
    font-family: monospace;
    text-transform: uppercase;
    text-align: center;
    font-weight: 900;
    top: 42px;
`;

export const DialHeaderTextStyled = styled.div`
    position: absolute;
    height: 10px;
    width: 55px;
    font-size: 5.5px;
    font-family: monospace;
    text-transform: uppercase;
    text-align: center;
    line-height: 5px;
    top: 50px;
`;

export const DialTextStyled = styled.div`
    position: absolute;
    height: 10px;
    width: 70px;
    font-size: 4px;
    font-family: monospace;
    text-transform: uppercase;
    text-align: center;
    line-height: 4px;
    bottom: 41.5px;
`;

export const SVGStyled = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10px;
`;