import { COLORS } from "../../../const/COLORS";

export const DECORATION = (index: number) => ({
    SHIELD: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '.8px solid transparent',
        borderTop: '.8px solid transparent',
        borderLeft: `4px solid ${COLORS.DECORATION_BEZEL_DARK_COLOR}`,
        height: '10px',
        position: 'absolute',
        transform: `rotate(${index * 5.54}deg)`
    }
})

export const ARRAY_FROM_DECORATION = Array.from({ length: 65 }, (element, index) => DECORATION(index).SHIELD)

export type typeOfDecoration = typeof ARRAY_FROM_DECORATION[number];