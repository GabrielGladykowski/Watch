import styled from "styled-components";
import { COLORS } from "../../../const/COLORS";
import { typeOfDecoration } from "./Decoration.data";

type rotation = {
    transform: typeOfDecoration[`transform`]
}

export const DecorationWrapperStyled = styled.div<rotation>`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transform: ${(props) => props.transform};
    position: absolute;
    width: fit-content;
    height: 97.2px;
    top: .9px;
    transform-origin: left bottom;
`

export const DecorationStyled = styled.div<Omit<typeOfDecoration, 'transform'>>`
    display: ${(props) => props.display};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    position: ${(props) => props.position};
    border-bottom: ${(props) => props.borderBottom};
    border-top: ${(props) => props.borderTop};
    border-left: ${(props) => props.borderLeft};
    height: ${(props) => props.height};
    &::before {
        position: absolute;
        content: "";
        border-bottom: 1.8px solid transparent;
        border-top: .8px solid transparent;
        border-right: 4px solid ${COLORS.DECORATION_BEZEL_LIGHT_COLOR};
        height: 12px;
        right: 4px;
        top: -.8px;
    }
`