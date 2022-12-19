import React, { createContext, useState } from "react";

export const TimerContext = createContext();

const TimerContextProvider = ({ children }) => {

    const [data, setData] = useState({
        focusMinutes: 15,
        focusSeconds: 0
    });

    return (
        <TimerContext.Provider value={{ data, setData }} >
            {children}
        </TimerContext.Provider>
    )
}

export default TimerContextProvider;