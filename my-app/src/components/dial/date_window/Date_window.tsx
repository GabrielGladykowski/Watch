import React from "react";
import { DateWindowFrameRightLeftStyled, DateWindowFrameTopBottomStyled, DateWindowWrapper } from "./Date_window.styled";

const MonthDay = new Date();

export const DateWindow = () => (
    <DateWindowWrapper>
        <DateWindowFrameTopBottomStyled />
        <DateWindowFrameRightLeftStyled />
        {MonthDay.getDate()}
    </DateWindowWrapper>
)