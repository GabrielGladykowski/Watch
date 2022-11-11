import React from "react";
import { CaseStyledBottomLeft, CaseStyledBottomRight, CaseStyledTopLeft, CaseStyledTopRight, CaseWrapperStyled } from "./Case.styled";

export const Case = () => (
    <CaseWrapperStyled>
        <CaseStyledTopLeft />
        <CaseStyledBottomLeft />

        <CaseStyledBottomRight />
        <CaseStyledTopRight />
    </CaseWrapperStyled>
);