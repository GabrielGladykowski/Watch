import React from "react";
import { DialStyled } from "./Dial.styled";
import { ARRAY_FROM_POINTS_HOURS, ARRAY_FROM_POINTS_SMALL } from "./points/Point.data";
import { PointStyled, PointWrapperStyled } from "./points/Point.styled";
import { Points } from "./points/Points";
import { v4 as uuid } from 'uuid';
import { Numbers } from "./numbers/Numbers";
import { ARRAY_FROM_NUMBERS } from "./numbers/Numbers.data";

const INDEX_NUMBER: number[] = [60, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

export const Dial = () => (
        <DialStyled>
                {ARRAY_FROM_POINTS_SMALL.map((props, index) => (
                        <Points key={uuid()} type='Small' {...props}/>
                ))}

                {ARRAY_FROM_POINTS_HOURS.map((props, index) => (
                        <Points key={uuid()} type='Hours' {...props}/>
                ))}

                {ARRAY_FROM_NUMBERS.map((props, index) => (
                        <Numbers key={uuid()} type='Number' {...props}>{INDEX_NUMBER[index]}</Numbers>
                ))}
        </DialStyled>
);