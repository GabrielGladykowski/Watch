import React from "react";
import { NumbersStyled } from "./Numbers.styled";
import { PointWrapperStyled } from "../points/Point.styled";
import { PointsType } from "../points/Points.types";

export const Numbers = ({transform, ...props}: PointsType) => (
    <PointWrapperStyled transform={transform}>
        <NumbersStyled {...props}/>
    </PointWrapperStyled>
);