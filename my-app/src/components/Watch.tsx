import React from "react";
import { Bezel } from "./bezel/Bezel";
import { Dial } from "./dial/Dial";
import { WatchStyled } from "./Watch.styled";

export const Watch = () => (
    <WatchStyled>
        <Bezel />
    </WatchStyled>
)