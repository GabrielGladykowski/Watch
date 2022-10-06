import { type } from "os";
import styled from "styled-components";
import { COLORS } from "../../../const/COLORS";
import { typeOfDecoration } from "./Decoration.data";

type y = {
    transform: typeOfDecoration[`transform`]
}

export const DecorationWrapperStyled = styled.div<y>`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transform: ${(props) => props.transform};
    position: absolute;
    width: fit-content;
    height: 92.8px;
    top: .5px;
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
    &::before{
        position: absolute;
        content: "";
        border-bottom: .8px solid transparent;
        border-top: .8px solid transparent;
        border-right: 4px solid ${COLORS.DECORATION_BEZEL_LIGHT_COLOR};
        height: 10px;
        right: 4px;
    }
`