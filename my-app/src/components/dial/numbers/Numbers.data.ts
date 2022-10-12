
export const NUMBERS = (index: number) => ({
    NUMBER: {
        width: '10px',
        height: '4px',
        backgroundColor: 'transparent',
        transform: `rotate(${index * 30}deg)`,
        marginTop: '-0.8px',
        borderRadius: '5px',
        border: 'none',
    }
});

export const ARRAY_FROM_NUMBERS = Array.from({ length: 12 }, (element, index) => NUMBERS(index).NUMBER);

export type TypeOfNumber = typeof ARRAY_FROM_NUMBERS[number];