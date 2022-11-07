import React, { createContext, useState } from "react";

export const ScoreContext = createContext();

export function ScoreProvider({ children }) {
    const [scoreOne, setscoreOne] = useState(0)
    const [scoretwo, setscoretwo] = useState(0)

    const data = { 
        scoreOne, setscoreOne,
        scoretwo, setscoretwo
     }

    return (
        <ScoreContext.Provider value={data}>
            {children}
        </ScoreContext.Provider>
    )
}