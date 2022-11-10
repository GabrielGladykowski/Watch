import React from "react";
import { Bezel } from "./bezel/Bezel";
import { Case } from "./case/Case";
import { Dial } from "./dial/Dial";
import { Strap } from "./strap/Strap";
import { ARRAY_FROM_STRAP_SILVER } from "./strap/Strap.data";
import { WatchStyled } from "./Watch.styled";
import { v4 as uuid } from 'uuid'

export const Watch = () => (
    <WatchStyled>
        <Case />
        <Strap />
        <Bezel />
    </WatchStyled>
)