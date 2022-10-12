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
`
// 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
// -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
// Verdana, Geneva, Tahoma, sans-serif
// 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif