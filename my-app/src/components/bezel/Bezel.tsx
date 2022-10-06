import React from "react";
import { Dial } from "../dial/Dial";
import { BezelStyled } from "./Bezel.styled";
import { Decoration } from "./decoration/Decoration";
import { ARRAY_FROM_DECORATION } from "./decoration/Decoration.data";

export const Bezel = () => (
    <BezelStyled>
        <Dial />
        
        {ARRAY_FROM_DECORATION.map((props, index) => (
            <Decoration key={index} {...props}/>
        ))}
    </BezelStyled>
)