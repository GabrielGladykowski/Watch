import React, { useContext } from "react";
import { HandsContext } from "../hands/HandsContext";
import { DateWindowFrameRightLeftStyled, DateWindowFrameTopBottomStyled, DateWindowWrapper } from "./Date_window.styled";

const MonthDay = new Date();

export const DateWindow = () => {
    const date = useContext(HandsContext)
    return (
    <DateWindowWrapper>
        <DateWindowFrameTopBottomStyled />
        <DateWindowFrameRightLeftStyled />
        {date.getDate()}
    </DateWindowWrapper>
)}