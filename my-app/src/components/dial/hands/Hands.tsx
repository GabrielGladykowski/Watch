import React from "react";
import { CircleCenterHandsHourStyled, CircleCenterHandsMinuteStyled, CircleCenterHandsSecondStyled, HandsAllHourStyled, HandsAllMinuteStyled, HandsAllSecondStyled, HandsCenterHourStyled, HandsCenterMinuteStyled, HandsHalfLeftHourStyled, HandsHalfLeftMinuteStyled, HandsHalfLeftSecondStyled, HandsHalfRightHourStyled, HandsHalfRightMinuteStyled, HandsHalfRightSecondStyled, HandsWrapperHour, HandsWrapperMinute, HandsWrapperSecond } from "./Hands.styled";

export const HandsSecond = () => (
    <HandsWrapperSecond>
        <HandsAllSecondStyled>
            <HandsHalfLeftSecondStyled />

            <HandsHalfRightSecondStyled />
        </HandsAllSecondStyled>

        <CircleCenterHandsSecondStyled />
    </HandsWrapperSecond>
)

export const HandsMinute = () => (
    <HandsWrapperMinute>
        <HandsAllMinuteStyled>
            <HandsHalfLeftMinuteStyled />

            <HandsHalfRightMinuteStyled />
        </HandsAllMinuteStyled>
        <HandsCenterMinuteStyled />

        <CircleCenterHandsMinuteStyled />
    </HandsWrapperMinute>
) 

export const HandsHour = () => (
    <HandsWrapperHour>
        <HandsAllHourStyled>
            <HandsHalfLeftHourStyled />

            <HandsHalfRightHourStyled />
        </HandsAllHourStyled>
        <HandsCenterHourStyled />

        <CircleCenterHandsHourStyled />
    </HandsWrapperHour>
) 

export const Hands = () => (
    <>
        <HandsSecond />
        <HandsMinute />
        <HandsHour />
    </>
)