import React from "react";
import { Bezel } from "../bezel/Bezel";
import { Case } from "../case/Case";
import { Strap } from "../strap/Strap";
import { WatchStyled } from "./Layout.styled";

export const Watch = () => (
  <WatchStyled>
    <Case />
    <Strap />
    <Bezel />
  </WatchStyled>
);
