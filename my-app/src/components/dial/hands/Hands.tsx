import React, { useContext } from "react";
import { CircleCenterHandsHourStyled, CircleCenterHandsMinuteStyled, CircleCenterHandsSecondStyled, HandsAllHourStyled, HandsAllMinuteStyled, HandsAllSecondStyled, HandsCenterHourStyled, HandsCenterMinuteStyled, HandsHalfLeftHourStyled, HandsHalfLeftMinuteStyled, HandsHalfLeftSecondStyled, HandsHalfRightHourStyled, HandsHalfRightMinuteStyled, HandsHalfRightSecondStyled, HandsWrapperHour, HandsWrapperMinute, HandsWrapperSecond } from "./Hands.styled";
import { HandsContext } from "./HandsContext";

const HandsSecond = () => {
    const date = useContext(HandsContext);
    
    const seconds = (date: Date) => {
        const rotation = Math.floor((date.getSeconds() / 60) * 360)
        return (
            rotation
        )
    };

    return (
    <HandsWrapperSecond rotation={seconds(date)}>
        <HandsAllSecondStyled>
            <HandsHalfLeftSecondStyled />

            <HandsHalfRightSecondStyled />
        </HandsAllSecondStyled>

        <CircleCenterHandsSecondStyled />
    </HandsWrapperSecond>   
)};

export const HandsMinute = () => {
    const date = useContext(HandsContext);

    const minute = (date: Date) => {
        const rotation = Math.floor(((date.getMinutes() * 60 + date.getSeconds()) / 3600) * 360);
        return (
            rotation
        )
    };

    return (
        <HandsWrapperMinute rotation={minute(date)}>
            <HandsAllMinuteStyled>
                <HandsHalfLeftMinuteStyled />
    
                <HandsHalfRightMinuteStyled />
            </HandsAllMinuteStyled>
            <HandsCenterMinuteStyled />
    
            <CircleCenterHandsMinuteStyled />
        </HandsWrapperMinute>
)};

export const HandsHour = () => {
    const date = useContext(HandsContext);

    const hour = (date: Date) => {
        const rotation = Math.floor(((date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()) / 86400) * 720)
        return (
            rotation
        )
    };

    return (
        <HandsWrapperHour rotation={hour(date)}>
            <HandsAllHourStyled>
                <HandsHalfLeftHourStyled />
    
                <HandsHalfRightHourStyled />
            </HandsAllHourStyled>
            <HandsCenterHourStyled />
    
            <CircleCenterHandsHourStyled />
        </HandsWrapperHour>
)};

export const Hands = () => (
    <>
        <HandsSecond />
        <HandsMinute />
        <HandsHour />
    </>
);