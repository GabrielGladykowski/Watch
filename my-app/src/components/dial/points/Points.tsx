import React from "react";
import { ARRAY_FROM_POINTS, POINTS, typeOfPoints } from "./Point.data";
import { PointStyled, PointWrapperStyled } from "./Point.styled";

export const Points = ({transform, ...props}: typeOfPoints) => (
    <PointWrapperStyled transform={transform}>
        <PointStyled  {...props}/>
    </PointWrapperStyled>
)