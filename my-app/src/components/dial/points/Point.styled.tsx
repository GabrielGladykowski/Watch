import { type } from "@testing-library/user-event/dist/type";
import { Transform } from "stream";
import styled from "styled-components"
import { COLORS } from "../../../const/COLORS"
import { PointsType } from "./Points.types";

type rotation = {
    transform: PointsType['transform'],
};

export const PointWrapperStyled = styled.div<rotation>`
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

export const PointStyled = styled.div<Omit<PointsType, 'transform'>>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundColor};
    margin-top: ${(props) => props.marginTop};
    border-radius: ${(props) => props.borderRadius};
    border: ${(props) => props.border};
    box-shadow: ${(props) => props.boxShadow};
`;