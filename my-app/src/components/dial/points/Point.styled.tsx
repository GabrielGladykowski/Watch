import { type } from "@testing-library/user-event/dist/type";
import { Transform } from "stream";
import styled from "styled-components"
import { COLORS } from "../../../const/COLORS"
import { typeOfPoints } from "./Point.data"

type x = {
    transform: typeOfPoints['transform']
}

export const PointWrapperStyled = styled.div<x>`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transform: ${(props) => props.transform};
    position: absolute;
    width: fit-content;
    height: 80px;
    top: 0;
    transform-origin: center bottom;
`;

export const PointStyled = styled.div<Omit<typeOfPoints, 'transform'>>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundColor};
    margin-top: 1.5px;
    border-radius: 5px;
`;