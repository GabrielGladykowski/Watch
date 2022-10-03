import React from "react";
import { DialStyled } from "./Dial.styled";
import { ARRAY_FROM_POINTS } from "./points/Point.data";
import { PointStyled, PointWrapperStyled } from "./points/Point.styled";
import { Points } from "./points/Points";

export const Dial = () => (
        <DialStyled>
                {ARRAY_FROM_POINTS.map((props, index) => (
                        <Points key={index} {...props}/>
                ))}
        </DialStyled>
)