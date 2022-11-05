import React, { createContext, useState } from "react";

export const VarContext = createContext();

export function VarProvider({ children }) {
    const [videoGame, setvideoGame] = useState(null)

    const data = { videoGame, setvideoGame }

    return (
        <VarContext.Provider value={data}>
            {children}
        </VarContext.Provider>
    )
}
