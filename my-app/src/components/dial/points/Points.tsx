import React from "react";
import { ARRAY_FROM_POINTS_SMALL, POINTS } from "./Point.data";
import { PointStyled, PointWrapperStyled } from "./Point.styled";
import { PointsType } from "./Points.types";

export const Points = ({transform, ...props}: PointsType) => (
    <PointWrapperStyled transform={transform}>
        <PointStyled  {...props}/>
    </PointWrapperStyled>
);