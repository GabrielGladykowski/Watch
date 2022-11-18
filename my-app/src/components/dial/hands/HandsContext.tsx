import { createContext, ReactNode, useEffect, useState } from "react";

const initialStore = new Date();
export const HandsContext = createContext<typeof initialStore>(initialStore);

export const HandsProvider = ({ children }: {children: ReactNode}) => {
    const [date, setDate] = useState(initialStore);

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000);
        
        return () => {
            clearInterval(interval)
        }
    }, []);

    return (
        <HandsContext.Provider value={date}>
            {children}
        </HandsContext.Provider>
    )
};