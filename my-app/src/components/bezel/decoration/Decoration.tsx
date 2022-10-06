import React from "react";
import { typeOfDecoration } from "./Decoration.data";
import { DecorationWrapperStyled, DecorationStyled } from "./Decoration.styled";

export const Decoration = ({transform, ...props}: typeOfDecoration) => (
    <DecorationWrapperStyled transform={transform}>
        <DecorationStyled {...props}/>
    </DecorationWrapperStyled>
)