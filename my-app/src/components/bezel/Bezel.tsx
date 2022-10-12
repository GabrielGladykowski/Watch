import React from "react";
import { Dial } from "../dial/Dial";
import { BezelStyled } from "./Bezel.styled";
import { Decoration } from "./decoration/Decoration";
import { ARRAY_FROM_DECORATION } from "./decoration/Decoration.data";
import { v4 as uuid } from 'uuid';

export const Bezel = () => (
    <BezelStyled>
        <Dial />
        {ARRAY_FROM_DECORATION.map((props, index) => (
            <Decoration key={uuid()} {...props}/>
        ))}
    </BezelStyled>
)