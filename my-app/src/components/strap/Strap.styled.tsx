import { type } from "os";
import styled from "styled-components";
import { COLORS } from "../../const/COLORS";
import { typeOfStrapGold, typeOfStrapSilver } from "./Strap.data";

export const StrapWrapperStyled = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    height: 380px;
    width: 119px;
`

export const StrapWrapperSilverPart = styled.div`
    display: flex;
    position: absolute;
    height: 380px;
    width: 40px;
    left: 0;
    top: 20px;
    border-radius: 40% 0 0 50%;
    transform-origin: center;
    flex-direction: column;
    &::before {
        content: "";
        position: absolute;
        height: 380px;
        width: 40px;
        background-color: silver;
        right: -79px;
        border-radius: 0 40% 50% 0;
    }
`

export const StrapWrapperGoldenPart = styled.div`
    display: flex;
    position: absolute;
    height: 380px;
    width: 16px;
    top: 20px;
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