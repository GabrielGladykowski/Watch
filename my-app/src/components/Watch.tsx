import React from "react";
import { Bezel } from "./bezel/Bezel";
import { Case } from "./case/Case";
import { Dial } from "./dial/Dial";
import { WatchStyled } from "./Watch.styled";

export const Watch = () => (
    <WatchStyled>
        <Case />
        <Bezel />
    </WatchStyled>
)