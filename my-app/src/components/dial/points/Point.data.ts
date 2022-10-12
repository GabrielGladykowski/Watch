import { property } from "lodash";
import { type } from "os";
import { COLORS } from "../../../const/COLORS";

export const POINTS = (index: number) => ({
    SMALL: {
        width: '.6px',
        height: '4px',
        backgroundColor: `${COLORS.BLACK_COLOR}`,
        transform: `rotate(${index * 6}deg)`,
        marginTop: '1.5px',
        borderRadius: '5px',
        border: 'none',
        boxShadow: 'none',
    },
    HOURS: {
        width: '7px',
        height: '22px',
        backgroundColor: `${COLORS.HOURS_INSIDE_COLOR}`,
        transform: `rotate(${index * 30}deg)`,
        marginTop: '8px',
        borderRadius: '0',
        border: `1px solid ${COLORS.HOURS_COLOR}`,
        boxShadow: `.5px .5px 1px ${COLORS.SHADOW_COLOR}`,
    }
});

const INDEX_HOURS: number[] = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11];
const INDEX_SMALL: number[] = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

export const ARRAY_FROM_POINTS_SMALL = Array.from({ length: 60 }, (element, index) => POINTS(index).SMALL).filter((_, index) => !INDEX_SMALL.includes(index));
export const ARRAY_FROM_POINTS_HOURS = Array.from({ length: 12 }, (element, index) => POINTS(index).HOURS).filter((_, index) => INDEX_HOURS.includes(index));

export type TypeOfPointsSmall = typeof ARRAY_FROM_POINTS_SMALL[number];
export type TypeOfPointsHours = typeof ARRAY_FROM_POINTS_HOURS[number];