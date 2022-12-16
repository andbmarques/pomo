import React, { createContext } from "react";

export const TimerContext = createContext();

const TimerContextProvider = ({ children }) => {
    return (
        <TimerContext.Provider>
            {children}
        </TimerContext.Provider>
    )
}

export default TimerContextProvider;