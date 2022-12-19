import React, { createContext } from "react";

export const TimerContext = createContext();

const TimerContextProvider = ({ children }) => {
    return (
        <TimerContext.Provider value={{}} >
            {children}
        </TimerContext.Provider>
    )
}

export default TimerContextProvider;