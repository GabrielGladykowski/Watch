import { type } from "os";
import { COLORS } from "../../const/COLORS";


const BADGE = (index: number) => ({
    SILVER: {
        display: `flex`,
        width: `40px`,
        height: `20px`,
        background: `linear-gradient(
            0deg, 
            ${COLORS.STRAP_NORMAL_COLOR} 0%, 
            ${COLORS.STRAP_LITTLE_DARK_COLOR} 15%, 
            ${COLORS.STRAP_NORMAL_COLOR} 35%, 
            ${COLORS.STRAP_LIGHT_COLOR} 70%, 
            ${COLORS.STRAP_DARK_COLOR} 80%, 
            ${COLORS.STRAP_NORMAL_COLOR} 100%)`,
        borderTop: `.2px solid ${COLORS.STRAP_LIGHT_COLOR}`,
        borderBottom: `.2px solid ${COLORS.STRAP_DARK_COLOR}`,
    },
    GOLD: {
        display: `flex`,
        width: `16px`,
        height: `18px`,
        background: `linear-gradient(
            0deg, 
            ${COLORS.STRAP_NORMAL_GOLD} 0%, 
            ${COLORS.STRAP_LITTLE_DARK_GOLD} 15%, 
            ${COLORS.STRAP_NORMAL_GOLD} 29%, 
            ${COLORS.STRAP_LIGHT_GOLD} 67%, 
            ${COLORS.STRAP_DARK_GOLD} 86%, 
            ${COLORS.STRAP_NORMAL_GOLD} 100%)`,
        borderTop: `none`,
        borderBottom: `none`,
    },
})

export const ARRAY_FROM_STRAP_SILVER = Array.from({ length: 19 }, (element, index) => BADGE(index).SILVER)
export const ARRAY_FROM_STRAP_GOLD = Array.from({ length: 22 }, (element, index) => BADGE(index).GOLD)

export type typeOfStrapSilver = typeof ARRAY_FROM_STRAP_SILVER[number];
export type typeOfStrapGold = typeof ARRAY_FROM_STRAP_GOLD[number];