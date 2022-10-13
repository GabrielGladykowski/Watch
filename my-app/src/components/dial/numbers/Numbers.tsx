import React, { PropsWithChildren } from "react";
import { NumbersStyled } from "./Numbers.styled";
import { PointWrapperStyled } from "../points/Point.styled";
import { TypeOfNumber } from "./Numbers.data";

export const Numbers = ({transform, ...props}: PropsWithChildren<TypeOfNumber>) => (
    <PointWrapperStyled transform={transform}>
        <NumbersStyled {...props}/>
    </PointWrapperStyled>
);