import { type } from "os";
import styled from "styled-components";
import { COLORS } from "../../const/COLORS";
import { typeOfStrapGold, typeOfStrapSilver } from "./Strap.data";

export const StrapWrapperStyled = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    height: 420px;
    width: 119px;
    overflow: hidden;
    border-radius: 21%;
`

export const StrapWrapperSilverPart = styled.div`
    display: flex;
    position: absolute;
    height: 390px;
    width: 40px;
    left: 0;
    top: 30px;
    transform-origin: center;
    flex-direction: column;
    &::before {
        content: "";
        position: absolute;
        height: 380px;
        width: 40px;
        background-color: silver;
        right: -79px;
    }
`

export const StrapWrapperGoldenPart = styled.div`
    display: flex;
    position: absolute;
    height: 390px;
    width: 16px;
    top: 30px;
    transform-origin: center;
    flex-direction: column;
    &::before {
        content: "";
        position: absolute;
        height: 380px;
        width: 16px;
        right: 16px;
    }
    &::after {
        content: "";
        position: absolute;
        height: 380px;
        width: 16px;
        left: 16px;
    }
`

export const StrapSilverPart = styled.div<typeOfStrapSilver>`
    display: ${(props) => props.display};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: ${(props) => props.background};
    border-top: ${(props) => props.borderTop};
    border-bottom: ${(props) => props.borderBottom};
    &::before {
        position: absolute;
        content: "";
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        background: ${(props) => props.background};
        border-top: ${(props) => props.borderTop};
        border-bottom: ${(props) => props.borderBottom};
        right: -79px;
    }
`

export const StrapGoldPart = styled.div<typeOfStrapGold>`
    display: ${(props) => props.display};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: ${(props) => props.background};
    &::before {
        content: "";
        position: absolute;
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        background: ${(props) => props.background};
        right: 16px;
        transform: rotate(180deg);
    }
    &::after {
        content: "";
        position: absolute;
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        background: ${(props) => props.background};
        left: 16px;
        transform: rotate(180deg);
    }
`