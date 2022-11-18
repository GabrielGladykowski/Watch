import styled from "styled-components"
import { TypeOfNumber } from "./Numbers.data"

export const NumbersStyled = styled.div<Omit<TypeOfNumber, 'transform'>>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundColor};
    margin-top: ${(props) => props.marginTop};
    border-radius: ${(props) => props.borderRadius};
    border: ${(props) => props.border};
    font-size: 7px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
`;