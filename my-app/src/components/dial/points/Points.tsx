import React from "react";
import { PointStyled, PointWrapperStyled } from "./Point.styled";
import { PointsType } from "./Points.types";

export const Points = ({transform, ...props}: PointsType) => (
    <PointWrapperStyled transform={transform}>
        <PointStyled  {...props}/>
    </PointWrapperStyled>
);