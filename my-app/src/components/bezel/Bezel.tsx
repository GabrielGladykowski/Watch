import React from "react";
import { Dial } from "../dial/Dial";
import { BezelStyled } from "./Bezel.styled";
import { Decoration } from "./decoration/Decoration";
import { ARRAY_FROM_DECORATION } from "./decoration/Decoration.data";
import { DecorationStyled, DecorationWrapperStyled } from "./decoration/Decoration.styled";

export const Bezel = () => (
    <BezelStyled>
        <Dial />
        
        {ARRAY_FROM_DECORATION.map((props, index) => (
            <Decoration key={index} {...props}/>
        ))}
    </BezelStyled>
)