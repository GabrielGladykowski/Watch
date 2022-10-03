import { type } from "os";
import { COLORS } from "../../../const/COLORS";

export const POINTS = (index: number) =>  ({
    SMALL: {
        width: '1px',
        height: '5px',
        backgroundColor: `${COLORS.BLACK_COLOR}`,
        transform: `rotate(${index * 6}deg)`
    }
})

export const ARRAY_FROM_POINTS = Array.from({ length: 60 }, (element, index) => POINTS(index).SMALL)

export type typeOfPoints = typeof ARRAY_FROM_POINTS[number];