import { type } from "os";
import { COLORS } from "../../../const/COLORS";

export const POINTS = (index: number) =>  ({
    SMALL: {
        width: '.6px',
        height: '4px',
        backgroundColor: `${COLORS.BLACK_COLOR}`,
        marginTop: '1.5px',
        borderRadius: '5px',
        transform: `rotate(${index * 6}deg)`
    }
})

export const ARRAY_FROM_POINTS = Array.from({ length: 60 }, (element, index) => POINTS(index).SMALL);

export type typeOfPoints = typeof ARRAY_FROM_POINTS[number];