import React from "react";
import { ARRAY_FROM_STRAP_GOLD, ARRAY_FROM_STRAP_SILVER, typeOfStrapGold, typeOfStrapSilver } from "./Strap.data";
import { StrapGoldPart, StrapSilverPart, StrapWrapperGoldenPart, StrapWrapperSilverPart, StrapWrapperStyled } from "./Strap.styled";
import { v4 as uuid} from 'uuid';

export const StrapSilver = ({...props}: typeOfStrapSilver) => (
    <StrapSilverPart {...props}/>
);

export const StrapGold = ({...props}: typeOfStrapGold) => (
    <StrapGoldPart {...props}/>
);

export const Strap = () => (
    <StrapWrapperStyled>
        <StrapWrapperSilverPart>
            {ARRAY_FROM_STRAP_SILVER.map((props, index) => (
                <StrapSilver key={uuid()} {...props}/>
            ))}
        </StrapWrapperSilverPart>
        <StrapWrapperGoldenPart>
            {ARRAY_FROM_STRAP_GOLD.map((props, index) => (
                <StrapGold key={uuid()} {...props}/>
            ))}
        </StrapWrapperGoldenPart>
    </StrapWrapperStyled>
);